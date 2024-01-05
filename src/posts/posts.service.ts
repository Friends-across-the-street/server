import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';
import { IncumbentUser, StudentUser } from 'src/global/types/user.type';
import { UserType } from 'src/auth/enum/user-type.enum';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async create(args: CreatePostArgs, user: IncumbentUser | StudentUser) {
    const userTypeById =
      user.type === UserType.INCUMBENT
        ? { incumbentUserId: user.id }
        : { studentUserId: user.id };
    await this.prismaService.posts.create({
      data: { ...args, ...userTypeById },
    });
    return;
  }

  async getPage(page: number, limit: number) {
    return await this.prismaService.posts.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        id: 'desc',
      },
    });
  }

  async getById(postId: number) {
    return await this.prismaService.posts.findFirst({
      where: { id: postId },
    });
  }
}
