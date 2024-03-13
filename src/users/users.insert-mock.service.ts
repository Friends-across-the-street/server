import { Injectable } from '@nestjs/common';
import { Gender, userType } from 'prisma/generated/mysql';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';
import { AddAdditionalInfoArgs } from './interface/add-additional-info.interface';

@Injectable()
export class UsersInsertMockService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly usersReopsitory: UsersRepository,
  ) {}

  async createMockData() {
    const additionalInfo: AddAdditionalInfoArgs = {
      schoolId: 1,
      majorId: 1,
      companyId: 1,
      bigJobKindId: 1,
      midJobKindId: 1,
      smallJobKindId: 1,
    };

    const incumbent = await this.prismaService.users.findFirst({
      where: { email: 'incumbent_test1@naver.com' },
    });
    if (!incumbent) {
      console.log('Insert User Mock Data');
      const create: CreateUserDto = {
        email: 'incumbent_test1@naver.com',
        password: 'incumbent1',
        name: '나는야 현직자 이상훈',
        age: 25,
        gender: Gender.male,
        type: userType.incumbent,
      };

      await this.authService.signup(create);
      await this.usersReopsitory.addAdditionalInfoForIncumbent(
        incumbent.id,
        additionalInfo,
      );
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
      await this.usersReopsitory.addAdditionalInfoForStudent(
        incumbent.id,
        additionalInfo,
      );
    }
  }
}
