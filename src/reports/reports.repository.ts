import { Injectable } from '@nestjs/common';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReportsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async reportPost(postId: number, reason: string, user: UserDataInAuthGuard) {
    await this.prismaService.reportedPosts.create({
      data: {
        postId,
        userId: user.id,
        reason,
      },
    });
  }

  async reportComment(
    commentId: number,
    reason: string,
    user: UserDataInAuthGuard,
  ) {
    await this.prismaService.reportedComments.create({
      data: {
        commentId,
        userId: user.id,
        reason,
      },
    });
  }

  async reportUser(
    targetUserId: number,
    reportingUser: UserDataInAuthGuard,
    reason: string,
  ) {
    await this.prismaService.reportedUsers.create({
      data: {
        targetUserId,
        reportingUserId: reportingUser.id,
        reason,
      },
    });
  }
}
