import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface RegisterShortSpecArgs {
  userId: number;
  spec: string;
  user: UserDataInAuthGuard;
}
