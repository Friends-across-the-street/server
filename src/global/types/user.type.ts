import { Gender, incumbents, students } from '@prisma/client';
import { UserType } from 'src/auth/enum/user-type.enum';

export class IncumbentUser implements incumbents {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly age: number;
  readonly gender: Gender;
  readonly created_date: Date;
  readonly type: UserType;
}

export class StudentUser implements students {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly age: number;
  readonly gender: Gender;
  readonly created_date: Date;
  readonly type: UserType;
}
