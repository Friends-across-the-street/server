import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async create(args: CreatePostArgs) {
    return await this.prismaService.posts.create({
      data: args,
    });
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
