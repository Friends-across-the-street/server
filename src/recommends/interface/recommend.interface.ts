import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface RecommendPostArgs {
  readonly postId: number;
  readonly user: UserDataInAuthGuard;
}
