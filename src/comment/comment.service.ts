import { Injectable } from '@nestjs/common';
import { CreateCommentArgs } from 'src/posts/interface/create-comment.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  async create(args: CreateCommentArgs) {
    return await this.prismaService.comments.create({ data: args });
  }
}
