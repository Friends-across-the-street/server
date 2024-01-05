import { Gender, incumbent_users, student_users } from '@prisma/client';
import { UserType } from 'src/auth/enum/user-type.enum';

export class IncumbentUser implements incumbent_users {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly age: number;
  readonly gender: Gender;
  readonly image: string;
  readonly reported_num: number;
  readonly advice_count: number;
  readonly estimation_count: number;
  readonly major: string;
  readonly school: string;
  readonly job_description: string;
  readonly company_name: string | null;
  readonly company_welfare: string;
  readonly company_location: string | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly type: UserType;
}

export class StudentUser implements student_users {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly age: number;
  readonly gender: Gender;
  readonly image: string;
  readonly reported_num: number;
  readonly total_grade: number;
  readonly advice_count: number;
  readonly estimation_count: number;
  readonly major: string;
  readonly school: string;
  readonly wish_job_description: string;
  readonly wish_company_name: string;
  readonly wish_company_welfare: string;
  readonly wish_company_location: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly type: UserType;
}
