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
    let queryStr = `SELECT p.id AS postId, p.title, p.content, p.view, p.recommend, p.created_date AS postCreateDate, p.updated_date AS postUpdateDate, u.id AS userId, u.name AS username, u.image, u.type AS userType, i.company_name AS companyName, i.job_description AS jobDescription, s.major, s.school
    FROM posts AS p
    LEFT JOIN users AS u ON p.user_id = u.id
    LEFT JOIN incumbents_additional AS i ON u.id = i.user_id
    LEFT JOIN students_additional AS s ON u.id = s.user_id
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
      const username = post.username;
      const image = post.image;
      const additionalInfoSup =
        type === userType.student ? post.school : post.companyName;
      const additionalInfoSub =
        type === userType.student ? post.major : post.jobDescription;

      let additionalInfo;
      if (!additionalInfoSup) {
        additionalInfo = null;
      } else if (!additionalInfoSub) {
        additionalInfo = additionalInfoSup;
      } else {
        additionalInfo = additionalInfoSup + ' ' + additionalInfoSub;
      }

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
          username,
          image,
          additionalInfo,
        },
      };
      result.push(refinedPost);
    });

    return result;
  }

  async getDetailOnePost(postId: number, user: UserDataInAuthGuard) {
    const postList: onePostForQuery[] = await this.prismaService.$queryRaw`
    SELECT p.id AS id, p.title AS title, p.content AS content, p.view AS view, p.recommend AS recommend, p.created_date AS createdDate, p.updated_date AS updatedDate, p.user_id AS postUserId, u.name, u.image, u.type AS userType, i.company_name AS companyName, i.job_description AS jobDescription, s.major AS major, s.school AS school
    FROM posts AS p
    LEFT JOIN users AS u ON p.user_id = u.id
    LEFT JOIN incumbents_additional AS i ON u.id = i.user_id
    LEFT JOIN students_additional AS s ON u.id = s.user_id
    WHERE p.id = ${postId}`;

    const post = postList.pop();

    if (!post) {
      throw new CustomException('해당 게시글이 존재하지 않습니다.', 404);
    }

    let checkMyPost: boolean = false;
    if (post.postUserId === post.userId) {
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

    // type id username image additionalInfo
    const type: userType = post.userType;
    const additionalInfoSup =
      type === userType.student ? post.school : post.companyName;
    const additionalInfoSub =
      type === userType.student ? post.major : post.jobDescription;

    let additionalInfo;
    if (!additionalInfoSup) {
      additionalInfo = null;
    } else if (!additionalInfoSub) {
      additionalInfo = additionalInfoSup;
    } else {
      additionalInfo = additionalInfoSup + ' ' + additionalInfoSub;
    }

    const refinedPost: refinedOnePost = {
      id: post.id,
      user: {
        id: post.postUserId,
        username: post.name,
        image: post.image || null,
        type: post.userType,
        additionalInfo,
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

    return {
      ...refinedPost,
      comments,
    };
  }

  private async findCommentsByPostId(postId: number, userId: number) {
    const comments: commentsInPostForQuery[] = await this.prismaService
      .$queryRaw`
    SELECT c.id AS id, c.content, c.recommend, c.parent_comment_id AS parentCommentId, c.created_date AS createdDate, c.updated_date AS updatedDate, c.user_id AS commentUserId, u.name AS username, u.image AS image, u.type AS userType, i.company_name AS companyName, i.job_description AS jobDescription, s.major AS major, s.school AS school
    FROM comments AS c
    LEFT JOIN users AS u ON c.user_id = u.id
    LEFT JOIN incumbents_additional AS i ON u.id = i.user_id
    LEFT JOIN students_additional AS s ON u.id = s.user_id
    WHERE post_id = ${postId}
    ORDER BY (parent_comment_id IS NULL) DESC, parent_comment_id ASC;`;

    const refinedComments = [];

    comments.forEach((comment) => {
      let checkMine: boolean = false;
      if (comment.commentUserId === userId) {
        checkMine = true;
      }

      const type: userType = comment.userType;
      const additionalInfoSup =
        type === userType.student ? comment.school : comment.companyName;
      const additionalInfoSub =
        type === userType.student ? comment.major : comment.jobDescription;

      let additionalInfo;
      if (!additionalInfoSup) {
        additionalInfo = null;
      } else if (!additionalInfoSub) {
        additionalInfo = additionalInfoSup;
      } else {
        additionalInfo = additionalInfoSup + ' ' + additionalInfoSub;
      }

      const pushedData: refinedCommentsInPost = {
        id: comment.id,
        content: comment.content,
        user: {
          id: comment.commentUserId,
          name: comment.username,
          image: comment.image || null,
          type: comment.userType,
          additionalInfo,
        },
        parentCommentId: comment.parentCommentId || null,
        recommend: comment.recommend,
        createdDate: comment.createdDate,
        updatedDate: comment.updatedDate,
        isMine: checkMine,
      };

      refinedComments.push(pushedData);
    });

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

  async createMockData() {
    // 게시글 삽입
    const existStudentPost = await this.prismaService.posts.findFirst({
      where: { AND: { userId: 1, title: '더미데이터' } },
    });
    const post = { title: '더미데이터', content: '더미데이터' };
    if (!existStudentPost) {
      await this.prismaService.posts.create({
        data: { ...post, userId: 1, categoryId: 1 },
      });
    }

    const post2 = { title: '더미데이터2', content: '더미데이터2' };
    const existIncumbentPost = await this.prismaService.posts.findFirst({
      where: { userId: 2, title: '더미데이터2' },
    });
    if (!existIncumbentPost) {
      await this.prismaService.posts.create({
        data: { ...post2, userId: 2, categoryId: 2 },
      });
    }

    // 댓글 삽입
    const comment = { userId: 1, postId: 1, content: '더미데이터' };
    const existStudentComment = await this.prismaService.comments.findFirst({
      where: { AND: comment },
    });
    if (!existStudentComment) {
      await this.prismaService.comments.create({
        data: { ...comment },
      });
    }

    const comment2 = { userId: 1, postId: 1, content: '더미데이터' };
    const existIncumbentComment = await this.prismaService.comments.findFirst({
      where: { AND: comment2 },
    });
    if (!existIncumbentComment) {
      await this.prismaService.comments.create({
        data: { ...comment },
      });
    }
  }
}
