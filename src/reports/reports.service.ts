import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  ReportCommentArgs,
  ReportPostArgs,
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
}
