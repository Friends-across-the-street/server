import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface UpdateCommentArgs {
  readonly commentId: number;
  readonly content?: string;
  readonly user: UserDataInAuthGuard;
}
