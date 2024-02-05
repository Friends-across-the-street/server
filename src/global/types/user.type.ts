import { userType } from 'prisma/generated/mysql';

/**
 * AuthGuard를 거쳐 payload값 그대로 반환
 */
export class UserDataInAuthGuard {
  readonly id: number;
  readonly email: string;
  readonly type: userType;
}
