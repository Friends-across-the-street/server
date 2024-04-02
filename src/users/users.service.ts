import { Injectable } from '@nestjs/common';
import { userType } from 'prisma/generated/mysql';
import { AuthService } from 'src/auth/auth.service';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { AddAdditionalInfoArgs } from './interface/add-additional-info.interface';
import { RegisterShortSpecArgs } from './interface/register-short-spec.interface';
import { RemoveShortSpecArgs } from './interface/remove-short-spec.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly usersReopsitory: UsersRepository,
  ) {}

  async findById(userId: number) {
    const user = await this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        email: true,
        name: true,
        age: true,
        gender: true,
        image: true,
        type: true,
      },
    });
    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }

    let additionalData, companyName, smallJobKindName, schoolName, majorName;
    switch (user.type) {
      case userType.incumbent:
        additionalData = await this.usersReopsitory.findIncumbentById(userId);
        companyName = additionalData.company.name;
        smallJobKindName = additionalData.smallJobKind.name;
        break;
      case userType.student:
        additionalData = await this.usersReopsitory.findStudentById(userId);
        schoolName = additionalData.school.name;
        majorName = additionalData.major.name;
        break;
    }

    return {
      ...user,
      company: companyName ?? null,
      smallJobKind: smallJobKindName ?? null,
      school: schoolName ?? null,
      major: majorName ?? null,
    };
  }

  async getMyProfile(user: UserDataInAuthGuard) {
    let additionalData, companyName, smallJobKindName;
    const userData = await this.prismaService.users.findFirst({
      where: { id: user.id },
      select: { email: true, name: true, age: true, gender: true, image: true },
    });
    switch (user.type) {
      case userType.incumbent:
        additionalData = await this.usersReopsitory.getMyProfileForIncumbent(
          user.id,
        );
        companyName = additionalData.company
          ? additionalData.company.name
          : null;
        smallJobKindName = additionalData.smallJobKind
          ? additionalData.smallJobKind.name
          : null;
        break;
      case userType.student:
        additionalData = await this.usersReopsitory.getMyProfileForStudent(
          user.id,
        );
        companyName = additionalData.wishCompany
          ? additionalData.wishCompany.name
          : null;
        smallJobKindName = additionalData.wishSmallJobKind
          ? additionalData.wishSmallJobKind.name
          : null;
        delete additionalData.wishCompany;
        delete additionalData.wishSmallJobKind;
        break;
    }

    return {
      ...userData,
      additionalInfo: {
        ...additionalData,
        company: companyName,
        smallJobKind: smallJobKindName,
      },
    };
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

  async registerShortSpec(args: RegisterShortSpecArgs) {
    return await this.prismaService.incumbentsAdditional.update({
      where: { userId: args.user.id },
      data: {
        shortSpec: args.spec,
      },
    });
  }

  async removeShortSpec(args: RemoveShortSpecArgs) {
    const user = await this.prismaService.users.findFirst({
      where: { id: args.userId },
      select: { id: true, type: true },
    });
    if (args.user.type !== userType.incumbent || args.user.id !== user.id) {
      throw new CustomException('정상적인 접근이 아닙니다.', 400);
    }
    return await this.prismaService.incumbentsAdditional.update({
      where: { userId: args.userId },
      data: {
        shortSpec: null,
      },
    });
  }
}
