import { userType } from 'prisma/generated/mysql';

export interface User {
  id: number;
  name: string;
  email: string;
  type: userType;
}

export interface UserAddedPassword extends User {
  password: string;
}
