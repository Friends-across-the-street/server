import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { ReportPostArgs } from './interface/report.interface';
import { CustomException } from 'src/global/exception/custom.exception';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly reportsRepository: ReportsRepository,
  ) {}

  @UseGuards(AuthGuard)
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
}
