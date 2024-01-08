import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';
import { IncumbentUser, StudentUser } from 'src/global/types/user.type';
import { UserType } from 'src/auth/enum/user-type.enum';
import { CustomException } from 'src/global/exception/custom.exception';
import { UpdatePostArgs } from './interface/update-post.interface';
import { postInList } from './interface/post-list.interface';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async create(args: CreatePostArgs, user: IncumbentUser | StudentUser) {
    const userTypeById =
      user.type === UserType.INCUMBENT
        ? { incumbentUserId: user.id }
        : { studentUserId: user.id };
    const createdPost = await this.prismaService.posts.create({
      data: { ...args, ...userTypeById },
    });
    if (!createdPost.incumbentUserId && !createdPost.studentUserId) {
      throw new CustomException('userId가 일치하지 않습니다.', 404);
    }
    return;
  }

  async getPage(page: number, limit: number) {
    const result = [];
    const postList = (await this.prismaService
      .$queryRaw`SELECT p.id AS postId, p.title, p.content, p.view, p.hit, p.createdAt AS postCreateDate, p.updatedAt AS postUpdateDate, i.id AS incumbentId, i.name AS incumbentName, i.image AS incumbentImage, s.id AS studentId, s.name AS studentName, s.image AS studentImage
    FROM posts AS p
    LEFT JOIN incumbent_users AS i ON p.incumbent_user_id = i.id
    LEFT JOIN student_users AS s ON p.student_user_id = s.id
    ORDER BY postCreateDate DESC
    LIMIT ${limit} OFFSET ${(page - 1) * limit};`) as postInList[];
    for (const post of postList) {
      const type = post.incumbentId === null ? 'student' : 'incumbent';
      const id = type === 'student' ? post.studentId : post.incumbentId;
      const name = type === 'student' ? post.studentName : post.incumbentName;
      const image =
        type === 'student' ? post.studentImage : post.incumbentImage;
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
