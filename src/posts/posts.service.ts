import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async createPost(title: string, content: string) {
    return await this.prismaService.posts.create({
      data: {
        title,
        content,
      },
    });
  }
}
