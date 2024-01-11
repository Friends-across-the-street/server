import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { ReportPostArgs } from './interface/report.interface';
import {
  IncumbentDataInAuthGuard,
  StudentDataInAuthGuard,
} from 'src/global/types/user.type';
import { UserType } from 'src/auth/enum/user-type.enum';
import { CustomException } from 'src/global/exception/custom.exception';

@Injectable()
export class ReportsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async reportPost(
    args: ReportPostArgs,
    user: IncumbentDataInAuthGuard | StudentDataInAuthGuard,
  ) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: args.postId },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }
    const userTypeById =
      user.type === UserType.INCUMBENT
        ? { incumbent_id: user.id }
        : { student_id: user.id };
    const createdReport = await this.prismaService.reported_posts.create({
      data: { ...args, ...userTypeById },
    });
    if (!createdReport.incumbent_id && !createdReport.student_id) {
      throw new CustomException('유저가 존재하지 않습니다.', 404);
    }
    await this.prismaService.posts.update({
      where: { id: args.postId },
      data: { reported: Number(post.reported) + 1 },
    });
  }

  // TODD 댓글 신고 API
}
