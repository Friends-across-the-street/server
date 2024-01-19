import { Injectable } from '@nestjs/common';
import { UserType } from 'src/auth/enum/user-type.enum';
import { CustomException } from 'src/global/exception/custom.exception';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { CreateCommentArgs } from 'src/posts/interface/create-comment.interface';
import { UpdateCommentArgs } from 'src/posts/interface/update-comment.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  async create(args: CreateCommentArgs) {
    return await this.prismaService.comments.create({ data: args });
  }

  async update(args: UpdateCommentArgs) {
    const comment = await this.prismaService.comments.findFirst({
      where: { id: args.commentId },
    });
    const commentType =
      comment.incumbentId === null ? UserType.STUDENT : UserType.INCUMBENT;
    if (
      args.user.type !== commentType ||
      (comment.incumbentId !== args.user.id &&
        comment.studentId !== args.user.id)
    ) {
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
    const commentType =
      comment.incumbentId === null ? UserType.STUDENT : UserType.INCUMBENT;
    if (
      user.type !== commentType ||
      (comment.incumbentId !== user.id && comment.studentId !== user.id)
    ) {
      throw new CustomException('댓글의 소유자가 아닙니다.', 403);
    }
    await this.prismaService.comments.delete({
      where: { id: comment.id },
    });
  }
}
