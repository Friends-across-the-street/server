import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';
import { CustomException } from 'src/global/exception/custom.exception';
import { postInList } from './interface/post-list.interface';
import { Prisma } from '@prisma/client';
import { UserType } from 'src/auth/enum/user-type.enum';

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
      .$queryRaw`SELECT p.id AS postId, p.title, p.content, p.view, p.hit, p.created_date AS postCreateDate, p.updated_date AS postUpdateDate, i.id AS incumbentId, i.name AS incumbentName, ia.image AS incumbentImage, s.id AS studentId, s.name AS studentName, sa.image AS studentImage, ia.company_name AS incumbentCompanyName, ia.job_description AS incumbentJobDescription, sa.school AS studentSchool, sa.major AS studentMajor, c.name AS categoryName
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
        hit: post.hit,
        category: post.categoryName,
        createdAt: post.postCreateDate,
        updatedAt: post.postUpdateDate,
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

  async getById(postId: number) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: postId },
    });
    if (!post) {
      throw new CustomException('해당 게시글이 존재하지 않습니다.', 404);
    }
    return post;
  }

  async update(postId: number, dto: Prisma.postsUpdateInput) {
    await this.getById(postId);
    return await this.prismaService.posts.update({
      data: { ...dto },
      where: { id: postId },
    });
  }

  async createMockData() {
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
  }
}
