import { UserType } from 'src/auth/enum/user-type.enum';

/**
 * AuthGuard를 거쳐 payload값 그대로 반환
 */
export class UserDataInAuthGuard {
  readonly id: number;
  readonly email: string;
  readonly type: UserType;
}

/**
 * AuthGuard를 거쳐 incumbentId or studentId로 반환
 */
export class RefineUserData {
  readonly incumbentId?: number;
  readonly studentId?: number;
}
