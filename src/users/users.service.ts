import { Injectable } from '@nestjs/common';
import { Gender, userType } from 'prisma/generated/mysql';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { AddAdditionalInfoArgs } from './interface/add-additional-info.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly usersReopsitory: UsersRepository,
  ) {}

  async findById(userId: number, type: userType) {
    let user;
    switch (type) {
      case userType.incumbent:
        user = await this.usersReopsitory.findIncumbentById(userId);
        break;
      case userType.student:
        user = await this.usersReopsitory.findStudentById(userId);
        break;
    }
    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }
    return user;
  }

  async uploadImage(user: UserDataInAuthGuard, file: Express.MulterS3.File) {
    if (file === undefined || file.location === undefined) {
      throw new CustomException('파일 저장에 실패했습니다.', 400);
    }
    return await this.prismaService.users.update({
      where: { id: user.id },
      data: {
        image: file.location,
      },
    });
  }

  async addAdditionalInfo(
    userId: number,
    args: AddAdditionalInfoArgs,
    user: UserDataInAuthGuard,
  ): Promise<void> {
    if (user.id !== userId) {
      throw new CustomException('권한이 존재하지 않습니다.', 403);
    }

    switch (user.type) {
      case userType.incumbent:
        await this.usersReopsitory.addAdditionalInfoForIncumbent(userId, args);
        break;
      case userType.student:
        await this.usersReopsitory.addAdditionalInfoForStudent(userId, args);
        break;
    }

    return;
  }

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
