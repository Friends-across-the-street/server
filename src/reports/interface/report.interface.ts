import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface ReportPostArgs {
  readonly postId: number;
  readonly reason: string;
  readonly user: UserDataInAuthGuard;
}

export interface ReportCommentArgs {
  readonly commentId: number;
  readonly reason: string;
  readonly user: UserDataInAuthGuard;
}

export interface ReportUserArgs {
  readonly targetUserId: number;
  readonly reason: string;
  readonly reportingUser: UserDataInAuthGuard;
}
