import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { ReportPostArgs } from './interface/report.interface';
import { CustomException } from 'src/global/exception/custom.exception';

@Injectable()
export class ReportsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async reportPost(args: ReportPostArgs) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: args.postId },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }
    const createdReport = await this.prismaService.reportedPosts.create({
      data: { postId: args.postId, userId: args.user.id, reason: args.reason },
    });
    if (!createdReport.userId) {
      throw new CustomException('유저가 존재하지 않습니다.', 404);
    }
    await this.prismaService.posts.update({
      where: { id: args.postId },
      data: { reported: Number(post.reported) + 1 },
    });
  }

  // TODD 댓글 신고 API
}
