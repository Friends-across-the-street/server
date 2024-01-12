import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';
import { RecommendPostArgs } from './interface/report.interface';

@Injectable()
export class RecommendsService {
  constructor(private prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  async recommendPost(dto: RecommendPostArgs) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: dto.postId },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }
    const orCondition =
      dto.incumbentId === null
        ? { studentId: dto.studentId }
        : { incumbentId: dto.incumbentId };
    const isExist = await this.prismaService.recommend_posts.findFirst({
      where: {
        AND: {
          postId: post.id,
          ...orCondition,
        },
      },
    });

    let changeRecommned: -1 | 1;
    if (!isExist) {
      await this.prismaService.recommend_posts.create({
        data: { ...dto },
      });
      changeRecommned = 1;
    } else {
      await this.prismaService.recommend_posts.delete({
        where: { id: isExist.id },
      });
      changeRecommned = -1;
    }

    await this.prismaService.posts.update({
      where: { id: dto.postId },
      data: { recommend: Number(post.recommend) + changeRecommned },
    });
  }
}
