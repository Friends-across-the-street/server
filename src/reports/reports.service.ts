import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  ReportCommentArgs,
  ReportPostArgs,
  ReportUserArgs,
} from './interface/report.interface';
import { CustomException } from 'src/global/exception/custom.exception';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly reportsRepository: ReportsRepository,
  ) {}

  async reportPost(args: ReportPostArgs) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: args.postId },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }

    const checkExist = await this.prismaService.reportedPosts.findFirst({
      where: {
        AND: {
          userId: args.user.id,
          postId: args.postId,
        },
      },
    });
    if (checkExist) {
      throw new CustomException('게시글을 이미 신고했습니다.', 400);
    }

    await this.reportsRepository.reportPost(
      args.postId,
      args.reason,
      args.user,
    );
    await this.prismaService.posts.update({
      where: { id: args.postId },
      data: { reported: Number(post.reported) + 1 },
    });
  }

  async reportComment(args: ReportCommentArgs) {
    const comment = await this.prismaService.comments.findFirst({
      where: { id: args.commentId },
    });

    if (!comment) {
      throw new CustomException('댓글이 존재하지 않습니다.', 404);
    }

    const checkExist = await this.prismaService.reportedComments.findFirst({
      where: {
        AND: {
          userId: args.user.id,
          commentId: args.commentId,
        },
      },
    });
    if (checkExist) {
      throw new CustomException('게시글을 이미 신고했습니다.', 400);
    }

    await this.reportsRepository.reportComment(
      args.commentId,
      args.reason,
      args.user,
    );
    await this.prismaService.comments.update({
      where: { id: args.commentId },
      data: { reported: Number(comment.reported) + 1 },
    });
  }

  async reportUser(args: ReportUserArgs) {
    const targetUser = await this.prismaService.users.findFirst({
      where: { id: args.targetUserId },
    });

    if (!targetUser) {
      throw new CustomException('신고 대상의 유저가 존재하지 않습니다.', 404);
    }

    const checkExist = await this.prismaService.reportedUsers.findFirst({
      where: {
        AND: {
          targetUserId: args.targetUserId,
          reportingUserId: args.reportingUser.id,
        },
      },
    });
    if (checkExist) {
      throw new CustomException('게시글을 이미 신고했습니다.', 400);
    }

    await this.reportsRepository.reportUser(
      args.targetUserId,
      args.reportingUser,
      args.reason,
    );
  }
}
