import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserType } from 'src/auth/enum/user-type.enum';
import { CustomException } from 'src/global/exception/custom.exception';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { PrismaService } from 'src/prisma.service';
import { ReportPostArgs } from 'src/reports/interface/report.interface';

@Injectable()
export class RecommendsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async recommendPost(postId: number, user: UserDataInAuthGuard) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: postId },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }
    const userTypeById =
      user.type === UserType.INCUMBENT
        ? { incumbent_id: user.id }
        : { student_id: user.id };
    const createdrecommend = await this.prismaService.recommend_posts.create({
      data: { postId, ...userTypeById },
    });
    if (!createdrecommend.incumbentId && !createdrecommend.studentId) {
      throw new CustomException('유저가 존재하지 않습니다.', 404);
    }
    await this.prismaService.posts.update({
      where: { id: postId },
      data: { recommend: Number(post.recommend) + 1 },
    });
  }
}
