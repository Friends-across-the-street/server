import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface CreatePostArgs {
  readonly title: string;
  readonly content: string;
  readonly user: UserDataInAuthGuard;
  readonly categoryId: number;
}
