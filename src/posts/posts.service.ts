import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async createPost(data: Prisma.postsCreateInput) {
    return await this.prismaService.posts.create({
      data,
    });
  }

  async getPost(postId: number) {
    return await this.prismaService.posts.findFirst({
      where: { id: postId },
    });
  }
}
