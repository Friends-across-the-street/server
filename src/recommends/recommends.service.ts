import { Injectable } from '@nestjs/common';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';
import {
  RecommendCommentArgs,
  RecommendPostArgs,
} from './interface/recommend.interface';

@Injectable()
export class RecommendsService {
  constructor(private prismaService: PrismaService) {}

  async recommendPost(dto: RecommendPostArgs) {
    const post = await this.prismaService.posts.findFirst({
      where: { id: dto.postId },
    });
    if (!post) {
      throw new CustomException('게시글이 존재하지 않습니다.', 404);
    }

    const isExist = await this.prismaService.recommendPosts.findFirst({
      where: {
        postId: dto.postId,
        userId: dto.user.id,
      },
    });

    let changedRecommnedNum: -1 | 1;
    if (!isExist) {
      await this.prismaService.recommendPosts.create({
        data: {
          postId: dto.postId,
          userId: dto.user.id,
        },
      });
      changedRecommnedNum = 1;
    } else {
      await this.prismaService.recommendPosts.delete({
        where: { id: isExist.id },
      });
      changedRecommnedNum = -1;
    }

    await this.prismaService.posts.update({
      where: { id: dto.postId },
      data: { recommend: Number(post.recommend) + changedRecommnedNum },
    });
  }

  async recommendComment(dto: RecommendCommentArgs) {
    const comment = await this.prismaService.comments.findFirst({
      where: { id: dto.commentId },
    });
    if (!comment) {
      throw new CustomException('댓글이 존재하지 않습니다.', 404);
    }

    const isExist = await this.prismaService.recommendComments.findFirst({
      where: {
        commentId: dto.commentId,
        userId: dto.user.id,
      },
    });

    let changedRecommnedNum: -1 | 1;
    if (!isExist) {
      await this.prismaService.recommendComments.create({
        data: {
          commentId: dto.commentId,
          userId: dto.user.id,
        },
      });
      changedRecommnedNum = 1;
    } else {
      await this.prismaService.recommendComments.delete({
        where: { id: isExist.id },
      });
      changedRecommnedNum = -1;
    }

    await this.prismaService.comments.update({
      where: { id: dto.commentId },
      data: { recommend: Number(comment.recommend) + changedRecommnedNum },
    });
  }
}
