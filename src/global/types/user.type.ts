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
 * AuthGuard를 거쳐 incumbent_id or student_id로 반환
 */
export class RefineUserData {
  readonly incumbent_id?: number;
  readonly student_id?: number;
}
