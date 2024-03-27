import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';
import { CustomException } from 'src/global/exception/custom.exception';
import { postInList } from './interface/post-list.interface';
import { Prisma, userType } from '../../prisma/generated/mysql';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import {
  commentsInPostForQuery,
  onePostForQuery,
  refinedCommentsInPost,
  refinedOnePost,
  removedCommentsInPost,
} from './interface/one-post.interface';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async create(args: CreatePostArgs) {
    return await this.prismaService.posts.create({
      data: {
        title: args.title,
        content: args.content,
        userId: args.user.id,
        categoryId: args.categoryId,
      },
    });
  }

  async getPage(page: number, limit: number, categoryId?: number) {
    const result = [];
    let queryStr = `SELECT p.id AS postId, p.title, p.content, p.view, p.recommend, p.created_date AS postCreateDate, p.updated_date AS postUpdateDate, u.id AS userId, u.name AS name, u.image, u.type AS userType, co.name AS companyName, sm.name AS jobDescription, sc.name AS school, m.name AS major
    FROM posts AS p
    LEFT JOIN users AS u ON p.user_id = u.id
    LEFT JOIN incumbents_additional AS i ON u.id = i.user_id
    LEFT JOIN company AS co ON i.company_id = co.id
    LEFT JOIN smallJobKind AS sm ON i.small_job_id = sm.id
    LEFT JOIN students_additional AS s ON u.id = s.user_id
    LEFT JOIN school AS sc ON s.school_id = sc.id
    LEFT JOIN major AS m ON s.major_id = m.id
    `;

    if (categoryId) {
      queryStr += `LEFT JOIN category AS c ON c.id = p.category_id
      WHERE c.id =${categoryId}`;
    }

    queryStr += `
    ORDER BY postCreateDate
    DESC LIMIT ${limit} OFFSET ${(page - 1) * limit};`;

    const postList = (await this.prismaService.$queryRawUnsafe(
      queryStr,
    )) as postInList[];

    postList.forEach((post: postInList) => {
      const type: userType = post.userType;
      const id = post.userId;
      const name = post.name;
      const image = post.image;

      const refinedPost = {
        id: post.postId,
        title: post.title,
        content: post.content,
        view: post.view,
        recommend: post.recommend,
        createdDate: post.postCreateDate,
        updatedDate: post.postUpdateDate,
        user: {
          type,
          id,
          name,
          image,
          additionalInfo: {
            companyName: post.companyName || null,
            jobDescription: post.jobDescription || null,
            major: post.major || null,
            school: post.school || null,
          },
        },
      };
      result.push(refinedPost);
    });

    return result;
  }

  async getDetailOnePost(postId: number, user: UserDataInAuthGuard) {
    const postList: onePostForQuery[] = await this.prismaService.$queryRaw`
    SELECT p.id AS id, p.title AS title, p.content AS content, p.view AS view, p.recommend AS recommend, p.created_date AS createdDate, p.updated_date AS updatedDate, p.user_id AS postUserId, u.name, u.image, u.type AS userType, co.name AS companyName, sm.name AS jobDescription, sc.name AS school, m.name AS major
    FROM posts AS p
    LEFT JOIN users AS u ON p.user_id = u.id
    LEFT JOIN incumbents_additional AS i ON u.id = i.user_id
    LEFT JOIN company AS co ON i.company_id = co.id
    LEFT JOIN smallJobKind AS sm ON i.small_job_id = sm.id
    LEFT JOIN students_additional AS s ON u.id = s.user_id
    LEFT JOIN school AS sc ON s.school_id = sc.id
    LEFT JOIN major AS m ON s.major_id = m.id
    WHERE p.id = ${postId};`;

    const post = postList.pop();

    if (!post) {
      throw new CustomException('해당 게시글이 존재하지 않습니다.', 404);
    }

    let checkMyPost: boolean = false;
    if (post.postUserId === user.id) {
      checkMyPost = true;
    }

    let checkRecommend: boolean = false;
    const isExist = await this.prismaService.recommendPosts.findFirst({
      where: {
        AND: {
          postId: post.id,
          userId: user.id,
        },
      },
    });
    if (isExist) {
      checkRecommend = true;
    }

    const refinedPost: refinedOnePost = {
      id: post.id,
      user: {
        id: post.postUserId,
        name: post.name,
        image: post.image || null,
        type: post.userType,
        additionalInfo: {
          companyName: post.companyName || null,
          jobDescription: post.jobDescription || null,
          major: post.major || null,
          school: post.school || null,
        },
      },
      title: post.title,
      content: post.content,
      view: post.view,
      recommend: post.recommend,
      reported: post.reported,
      createdDate: post.createdDate,
      updatedDate: post.updatedDate,
      isMine: checkMyPost,
      isRecommend: checkRecommend,
    };

    const comments = await this.findCommentsByPostId(postId, user.id);

    if (!checkMyPost) {
      // 본인외의 사람이 게시글을 조회했을때만 조회수 증가
      await this.incrementPostView(post.id);
    }

    return {
      ...refinedPost,
      comments,
    };
  }

  private async findCommentsByPostId(postId: number, userId: number) {
    const comments: commentsInPostForQuery[] = await this.prismaService
      .$queryRaw`
    SELECT c.id AS id, c.content, c.recommend, c.parent_comment_id AS parentCommentId, c.created_date AS createdDate, c.updated_date AS updatedDate, c.user_id AS commentUserId, c.is_delete AS isDelete, u.name AS name, u.image AS image, u.type AS userType, co.name AS companyName, sm.name AS jobDescription, sc.name AS school, m.name AS major
    FROM comments AS c
    LEFT JOIN users AS u ON c.user_id = u.id
    LEFT JOIN incumbents_additional AS i ON u.id = i.user_id
    LEFT JOIN company AS co ON i.company_id = co.id
    LEFT JOIN smallJobKind AS sm ON i.small_job_id = sm.id
    LEFT JOIN students_additional AS s ON u.id = s.user_id
    LEFT JOIN school AS sc ON s.school_id = sc.id
    LEFT JOIN major AS m ON s.major_id = m.id
    WHERE post_id = ${postId}
    ORDER BY createdDate ASC;`;

    const refinedCommentsPromises = comments.map(
      async (
        comment,
      ): Promise<refinedCommentsInPost | removedCommentsInPost> => {
        let checkRecommend: boolean = false;
        const isRecommend =
          await this.prismaService.recommendComments.findFirst({
            where: { AND: { commentId: comment.id, userId } },
          });
        if (isRecommend) {
          checkRecommend = true;
        }

        if (comment.isDelete) {
          const removedData: removedCommentsInPost = { id: comment.id };
          return removedData;
        }

        let checkMine: boolean = false;
        if (comment.commentUserId === userId) {
          checkMine = true;
        }

        return {
          id: comment.id,
          content: comment.content,
          user: {
            id: comment.commentUserId,
            name: comment.name,
            image: comment.image || null,
            type: comment.userType,
            additionalInfo: {
              companyName: comment.companyName || null,
              jobDescription: comment.jobDescription || null,
              major: comment.major || null,
              school: comment.school || null,
            },
          },
          parentCommentId: comment.parentCommentId || null,
          recommend: comment.recommend,
          createdDate: comment.createdDate,
          updatedDate: comment.updatedDate,
          isMine: checkMine,
          isRecommend: checkRecommend,
        };
      },
    );

    const refinedComments = await Promise.all(refinedCommentsPromises);

    return refinedComments;
  }

  async update(
    postId: number,
    dto: Prisma.postsUpdateInput,
    user: UserDataInAuthGuard,
  ) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: postId },
      include: { users: true },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }
    if (post.userId !== user.id) {
      throw new CustomException('게시글의 소유자가 아닙니다.', 403);
    }
    return await this.prismaService.posts.update({
      data: { ...dto },
      where: { id: postId },
    });
  }

  async delete(postId: number, user: UserDataInAuthGuard) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: postId },
      include: { users: true },
      // select: { userId: true },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }
    if (post.userId !== user.id) {
      throw new CustomException('게시글의 소유자가 아닙니다.', 403);
    }
    return await this.prismaService.posts.delete({ where: { id: postId } });
  }

  private async incrementPostView(postId: number) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: postId },
      select: { view: true },
    });
    return await this.prismaService.posts.update({
      data: {
        view: Number(post.view) + 1,
      },
      where: {
        id: postId,
      },
    });
  }

  async createMockData() {
    // 게시글 삽입
    const existStudentPost = await this.prismaService.posts.findFirst({
      where: { title: '제목1' },
    });
    if (!existStudentPost) {
      console.log('Insert Post Mock Data');
      for (let i = 0; i < 15; i++) {
        const title = '제목' + String(i + 1);
        const content = '내용' + String(i + 1);
        // user 20개
        const randUserId = Math.floor(Math.random() * 20) + 1;
        const randCategoryId = Math.floor(Math.random() * 3) + 1;
        console.log(randUserId, randCategoryId);
        await this.prismaService.posts.create({
          data: {
            title,
            content,
            userId: randUserId,
            categoryId: randCategoryId,
          },
        });
      }
    }

    // 댓글 삽입
    const existStudentComment = await this.prismaService.comments.findFirst({
      where: { content: '댓글1' },
    });
    if (!existStudentComment) {
      for (let i = 0; i < 25; i++) {
        const content = '댓글' + String(i + 1);
        const randUserId = Math.floor(Math.random() * 20) + 1;
        const randPostId = Math.floor(Math.random() * 15) + 1;
        await this.prismaService.comments.create({
          data: { userId: randUserId, postId: randPostId, content },
        });
      }
    }
  }
}
