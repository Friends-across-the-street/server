import { Injectable, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateIncumbentUserArgs } from 'src/auth/interface/create-user.interface';
import { PrismaService } from 'src/prisma.service';
import { CreatePostArgs } from './interface/create-post.interface';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async createPost(args: CreatePostArgs) {
    return await this.prismaService.posts.create({
      data: args,
    });
  }

  async getPost(postId: number) {
    return await this.prismaService.posts.findFirst({
      where: { id: postId },
    });
  }
}
