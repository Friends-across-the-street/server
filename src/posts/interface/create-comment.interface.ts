import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface CreateCommentArgs {
  readonly postId: number;
  readonly content: string;
  readonly parentCommentId?: number;
  readonly user: UserDataInAuthGuard;
}
