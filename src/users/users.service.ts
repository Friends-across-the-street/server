import { Injectable } from '@nestjs/common';
import { Gender } from 'prisma/generated/mysql';
import { AuthService } from 'src/auth/auth.service';
import { CreateIncumbentUserDto } from 'src/auth/dto/create-incumbent-user.dto';
import { CreateStudentUserDto } from 'src/auth/dto/create-student-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async createMockData() {
    const incumbent = await this.prismaService.incumbents.findFirst({
      where: { email: 'incumbent_test1@naver.com' },
    });
    if (!incumbent) {
      const create: CreateIncumbentUserDto = {
        email: 'incumbent_test1@naver.com',
        password: 'incumbent1',
        name: 'test3',
        age: 15,
        gender: Gender.male,
      };
      await this.authService.signupIncumbentUser(create);
    }

    const student = await this.prismaService.students.findFirst({
      where: { email: 'student_test1@naver.com' },
    });
    if (!student) {
      const create: CreateStudentUserDto = {
        email: 'student_test1@naver.com',
        password: 'student1',
        name: 'test3',
        age: 20,
        gender: Gender.female,
      };
      await this.authService.signupStudentUser(create);
    }
  }
}
