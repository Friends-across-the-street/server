import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AddAdditionalInfoArgs } from './interface/add-additional-info.interface';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findIncumbentById(userId: number) {
    return await this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        // TODO additional data 가져오기
      },
    });
  }

  async findStudentById(userId: number) {
    return await this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        // TODO additional data 가져오기
      },
    });
  }

  async addAdditionalInfoForIncumbent(
    userId: number,
    args: AddAdditionalInfoArgs,
  ) {
    return await this.prismaService.incumbentsAdditional.update({
      where: { userId },
      data: {
        schoolId: args.schoolId,
        majorId: args.majorId,
        companyId: args.companyId,
        bigJobId: args.bigJobKindId,
        midJobId: args.midJobKindId,
        smallJobId: args.smallJobKindId,
      },
    });
  }

  async addAdditionalInfoForStudent(
    userId: number,
    args: AddAdditionalInfoArgs,
  ) {
    return await this.prismaService.studentsAdditional.update({
      where: { userId },
      data: {
        schoolId: args.schoolId,
        majorId: args.majorId,
        wishCompanyId: args.companyId,
        wishBigJobId: args.bigJobKindId,
        wishMidJobId: args.midJobKindId,
        wishSmallJobId: args.smallJobKindId,
      },
    });
  }
}
