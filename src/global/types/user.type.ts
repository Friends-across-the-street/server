import { Gender, incumbents, students } from '@prisma/client';
import { UserType } from 'src/auth/enum/user-type.enum';

export class IncumbentDataInAuthGuard {
  readonly id: number;
  readonly email: string;
  readonly type: UserType;
}

export class StudentDataInAuthGuard {
  readonly id: number;
  readonly email: string;
  readonly type: UserType;
}
