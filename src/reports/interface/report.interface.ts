import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface ReportPostArgs {
  readonly postId: number;
  readonly reason: string;
  readonly user: UserDataInAuthGuard;
}
