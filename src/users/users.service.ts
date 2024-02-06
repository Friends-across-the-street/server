import { Injectable } from '@nestjs/common';
import { UserType } from '@prisma/client';
import { Gender, userType } from 'prisma/generated/mysql';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly usersReopsitory: UsersRepository,
  ) {}

  async findById(userId: number, type: UserType) {
    let user;
    switch (type) {
      case UserType.incumbent:
        user = await this.usersReopsitory.findIncumbentById(userId);
        break;
      case UserType.student:
        user = await this.usersReopsitory.findStudentById(userId);
        break;
    }
    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }
    return user;
  }

  async createMockData() {
    const incumbent = await this.prismaService.users.findFirst({
      where: { email: 'incumbent_test1@naver.com' },
    });
    if (!incumbent) {
      const create: CreateUserDto = {
        email: 'incumbent_test1@naver.com',
        password: 'incumbent1',
        name: '나는야 현직자 이상훈',
        age: 25,
        gender: Gender.male,
        type: userType.incumbent,
      };
      await this.authService.signup(create);
    }
    const student = await this.prismaService.users.findFirst({
      where: { email: 'student_test1@naver.com' },
    });
    if (!student) {
      const create: CreateUserDto = {
        email: 'student_test1@naver.com',
        password: 'student1',
        name: '나는야 인천대 공진성',
        age: 20,
        gender: Gender.female,
        type: userType.student,
      };
      await this.authService.signup(create);
    }
  }
}
