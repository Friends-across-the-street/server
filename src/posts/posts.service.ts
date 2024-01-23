import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';
import { CustomException } from 'src/global/exception/custom.exception';
import { postInList } from './interface/post-list.interface';
import { Prisma } from '../../prisma/generated/mysql';
import { UserType } from 'src/auth/enum/user-type.enum';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { onePostIncludeComments } from './interface/one-post.interface';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async create(args: CreatePostArgs) {
    const createdPost = await this.prismaService.posts.create({
      data: { ...args },
    });
    if (!createdPost.incumbentId && !createdPost.studentId) {
      throw new CustomException('userId가 일치하지 않습니다.', 404);
    }
  }

  async getPage(page: number, limit: number) {
    const result = [];

    const postList = (await this.prismaService
      .$queryRaw`SELECT p.id AS postId, p.title, p.content, p.view, p.recommend, p.created_date AS postCreateDate, p.updated_date AS postUpdateDate, i.id AS incumbentId, i.name AS incumbentName, ia.image AS incumbentImage, s.id AS studentId, s.name AS studentName, sa.image AS studentImage, ia.company_name AS incumbentCompanyName, ia.job_description AS incumbentJobDescription, sa.school AS studentSchool, sa.major AS studentMajor
    FROM posts AS p
    LEFT JOIN incumbents AS i ON p.incumbent_id = i.id
    LEFT JOIN incumbents_additional AS ia ON p.incumbent_id = ia.incumbent_id
    LEFT JOIN students AS s ON p.student_id = s.id
    LEFT JOIN students_additional AS sa ON p.student_id = sa.student_id
    LEFT JOIN category AS c ON p.category_id = c.id
    ORDER BY postCreateDate DESC
    LIMIT ${limit} OFFSET ${(page - 1) * limit};`) as postInList[];

    postList.forEach((post: postInList) => {
      const type: UserType =
        post.incumbentId === null ? UserType.STUDENT : UserType.INCUMBENT;
      const id = type === UserType.STUDENT ? post.studentId : post.incumbentId;
      const name =
        type === UserType.STUDENT ? post.studentName : post.incumbentName;
      const image =
        type === UserType.STUDENT ? post.studentImage : post.incumbentImage;
      const additionalInfoSup =
        type === UserType.STUDENT
          ? post.studentSchool
          : post.incumbentCompanyName;
      const additionalInfoSub =
        type === UserType.STUDENT
          ? post.studentMajor
          : post.incumbentJobDescription;
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
          name,
          image,
          additionalInfo,
        },
      };
      result.push(refinedPost);
    });

    return result;
  }

  async getPageByCategory(page: number, limit: number, categoryId: number) {
    // TODO 나중에 리팩토링
    const result = [];

    const postList = (await this.prismaService
      .$queryRaw`SELECT p.id AS postId, p.title, p.content, p.view, p.recommend, p.created_date AS postCreateDate, p.updated_date AS postUpdateDate, i.id AS incumbentId, i.name AS incumbentName, ia.image AS incumbentImage, s.id AS studentId, s.name AS studentName, sa.image AS studentImage, ia.company_name AS incumbentCompanyName, ia.job_description AS incumbentJobDescription, sa.school AS studentSchool, sa.major AS studentMajor
    FROM posts AS p
    LEFT JOIN incumbents AS i ON p.incumbent_id = i.id
    LEFT JOIN incumbents_additional AS ia ON p.incumbent_id = ia.incumbent_id
    LEFT JOIN students AS s ON p.student_id = s.id
    LEFT JOIN students_additional AS sa ON p.student_id = sa.student_id
    LEFT JOIN category AS c ON p.category_id = c.id
    WHERE c.id =${categoryId} 
    ORDER BY postCreateDate 
    DESC LIMIT ${limit} OFFSET ${(page - 1) * limit};`) as postInList[];

    postList.forEach((post: postInList) => {
      const type: UserType =
        post.incumbentId === null ? UserType.STUDENT : UserType.INCUMBENT;
      const id = type === UserType.STUDENT ? post.studentId : post.incumbentId;
      const name =
        type === UserType.STUDENT ? post.studentName : post.incumbentName;
      const image =
        type === UserType.STUDENT ? post.studentImage : post.incumbentImage;
      const additionalInfoSup =
        type === UserType.STUDENT
          ? post.studentSchool
          : post.incumbentCompanyName;
      const additionalInfoSub =
        type === UserType.STUDENT
          ? post.studentMajor
          : post.incumbentJobDescription;
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
          name,
          image,
          additionalInfo,
        },
      };
      result.push(refinedPost);
    });

    return result;
  }

  async getById(postId: number, user: UserDataInAuthGuard) {
    const onePostIncludedComment = (await this.prismaService
      .$queryRaw`SELECT p.id AS postId, p.incumbent_id AS postIncumbentId, p.student_id AS postStudentId, p.title AS postTitle, p.content AS postContent, p.view AS postView, p.recommend AS postRecommend, p.created_date AS postCreatedDate, p.updated_date AS postUpdatedDate, c.id AS commentId, c.incumbent_id AS commentIncumbentId, c.student_id AS commentStudentId, c.content AS commentContent, c.parent_comment_id AS parentCommentId, c.recommend AS commentRecommend, c.created_date AS commentCreatedDate, c.updated_date AS commentUpdatedDate
    FROM posts AS p
    LEFT JOIN comments AS c ON p.id = c.post_id
    WHERE p.id = ${postId}
    ORDER BY (parentCommentId IS NULL) DESC, parentCommentId ASC;`) as onePostIncludeComments[];

    if (!onePostIncludedComment.length) {
      throw new CustomException('해당 게시글이 존재하지 않습니다.', 404);
    }

    const post = {
      id: onePostIncludedComment[0].postId,
      incumbentId: onePostIncludedComment[0].postIncumbentId ?? null,
      studentId: onePostIncludedComment[0].postStudentId ?? null,
      title: onePostIncludedComment[0].postTitle,
      content: onePostIncludedComment[0].postContent,
      view: onePostIncludedComment[0].postView,
      recommend: onePostIncludedComment[0].postRecommend,
      createdDate: onePostIncludedComment[0].postCreatedDate,
      updatedDate: onePostIncludedComment[0].postUpdatedDate,
    };

    let checkMyPost: boolean = false;
    const postType =
      post.incumbentId === null ? UserType.STUDENT : UserType.INCUMBENT;
    if (
      user.type === postType &&
      (post.incumbentId === user.id || post.studentId === user.id)
    ) {
      checkMyPost = true;
    }

    let checkRecommend: boolean = false;
    const orCondition =
      user.type === UserType.STUDENT
        ? { studentId: user.id }
        : { incumbentId: user.id };
    const isExist = await this.prismaService.recommend_posts.findFirst({
      where: {
        AND: {
          postId: post.id,
          ...orCondition,
        },
      },
    });
    if (isExist) {
      checkRecommend = true;
    }

    const comments = [];
    onePostIncludedComment.some((item) => {
      if (!item.commentId) {
        return true; // 댓글이 없으므로 종료
      }
      comments.push({
        id: item.commentId,
        content: item.commentContent,
        recommend: item.commentRecommend,
        parentCommentId: item.parentCommentId ?? null,
        incumbentId: item.commentIncumbentId ?? null,
        studendId: item.commentStudentId ?? null,
        createdDate: item.commentCreatedDate,
        updatedDate: item.commentUpdatedDate,
      });
    });
    return {
      ...post,
      isMine: checkMyPost,
      isRecommend: checkRecommend,
      comments,
    };
  }

  async update(
    postId: number,
    dto: Prisma.postsUpdateInput,
    user: UserDataInAuthGuard,
  ) {
    const post = await this.getById(postId, user);
    if (post.isMine === false) {
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
      where: { AND: { studentId: 1, title: '더미데이터' } },
    });
    const post = { title: '더미데이터', content: '더미데이터' };
    if (!existStudentPost) {
      await this.prismaService.posts.create({
        data: { ...post, incumbentId: null, studentId: 1, categoryId: 1 },
      });
    }
    const existIncumbentPost = await this.prismaService.posts.findFirst({
      where: { incumbentId: 1, title: '더미데이터' },
    });
    if (!existIncumbentPost) {
      await this.prismaService.posts.create({
        data: { ...post, incumbentId: 1, categoryId: 1 },
      });
    }

    // 댓글 삽입
    const comment = { studentId: 1, postId: 1, content: '더미데이터' };
    const existStudentComment = await this.prismaService.comments.findFirst({
      where: { AND: comment },
    });
    if (!existStudentComment) {
      await this.prismaService.comments.create({
        data: { ...comment, incumbentId: null },
      });
    }
    const existIncumbentComment = await this.prismaService.comments.findFirst({
      where: { incumbentId: 1, postId: 1, content: '더미데이터' },
    });
    if (!existIncumbentComment) {
      await this.prismaService.comments.create({
        data: { ...comment, studentId: null, incumbentId: 1 },
      });
    }
  }
}
