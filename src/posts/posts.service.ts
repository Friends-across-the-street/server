import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';
import {
  IncumbentDataInAuthGuard,
  StudentDataInAuthGuard,
} from 'src/global/types/user.type';
import { UserType } from 'src/auth/enum/user-type.enum';
import { CustomException } from 'src/global/exception/custom.exception';
import { UpdatePostArgs } from './interface/update-post.interface';
import { postInList } from './interface/post-list.interface';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async create(
    args: CreatePostArgs,
    user: IncumbentDataInAuthGuard | StudentDataInAuthGuard,
  ) {
    const userTypeById =
      user.type === UserType.INCUMBENT
        ? { incumbent_id: user.id }
        : { student_id: user.id };
    const createdPost = await this.prismaService.posts.create({
      data: { ...args, ...userTypeById },
    });
    if (!createdPost.incumbent_id && !createdPost.student_id) {
      throw new CustomException('userId가 일치하지 않습니다.', 404);
    }
    return;
  }

  async getPage(page: number, limit: number) {
    const result = [];
    const postList = (await this.prismaService
      .$queryRaw`SELECT p.id AS postId, p.title, p.content, p.view, p.hit, p.created_date AS postCreateDate, p.updated_date AS postUpdateDate, i.id AS incumbentId, i.name AS incumbentName, ia.image AS incumbentImage, s.id AS studentId, s.name AS studentName, sa.image AS studentImage, ia.company_name AS incumbentCompanyName, ia.job_description AS incumbentJobDescription, sa.school AS studentSchool, sa.major AS studentMajor
    FROM posts AS p
    LEFT JOIN incumbents AS i ON p.incumbent_id = i.id
    LEFT JOIN incumbents_additional AS ia ON p.incumbent_id = ia.incumbent_id
    LEFT JOIN students AS s ON p.student_id = s.id
    LEFT JOIN students_additional AS sa ON p.student_id = sa.student_id
    ORDER BY postCreateDate DESC
    LIMIT ${limit} OFFSET ${(page - 1) * limit};`) as postInList[];
    for (const post of postList) {
      const type = post.incumbentId === null ? 'student' : 'incumbent';
      const id = type === 'student' ? post.studentId : post.incumbentId;
      const name = type === 'student' ? post.studentName : post.incumbentName;
      const image =
        type === 'student' ? post.studentImage : post.incumbentImage;
      const additionalInfo =
        type === 'student'
          ? post.studentSchool + ' ' + post.studentMajor
          : post.incumbentCompanyName + ' ' + post.incumbentJobDescription;
      const refinedPost = {
        id: post.postId,
        title: post.title,
        content: post.content,
        view: post.view,
        hit: post.hit,
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
    }
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

  async update(postId: number, dto: UpdatePostArgs) {
    return await this.prismaService.posts.update({
      where: { id: postId },
      data: { ...dto },
    });
  }
}
