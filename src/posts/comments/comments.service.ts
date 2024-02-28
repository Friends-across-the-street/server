import { Injectable } from '@nestjs/common';
import { CustomException } from 'src/global/exception/custom.exception';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { CreateCommentArgs } from 'src/posts/interface/create-comment.interface';
import { UpdateCommentArgs } from 'src/posts/interface/update-comment.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  async create(args: CreateCommentArgs) {
    const isExist = await this.prismaService.comments.findFirst({
      where: { id: args.parentCommentId },
    });

    if (!isExist) {
      throw new CustomException('부모 댓글의 ID가 존재하지 않습니다', 404);
    }

    return await this.prismaService.comments.create({
      data: {
        postId: args.postId,
        content: args.content,
        parentCommentId: args.parentCommentId || null,
        userId: args.user.id,
      },
    });
  }

  async update(args: UpdateCommentArgs) {
    const comment = await this.prismaService.comments.findFirst({
      where: { id: args.commentId },
    });
    if (comment.userId !== args.user.id) {
      throw new CustomException('댓글의 소유자가 아닙니다.', 403);
    }
    await this.prismaService.comments.update({
      data: { content: args.content },
      where: { id: comment.id },
    });
  }

  async delete(commentId: number, user: UserDataInAuthGuard) {
    const comment = await this.prismaService.comments.findFirst({
      where: { id: commentId },
    });
    if (comment.userId !== user.id) {
      throw new CustomException('댓글의 소유자가 아닙니다.', 403);
    }

    await this.prismaService.comments.update({
      where: { id: comment.id },
      data: { isDelete: true },
    });
  }
}
