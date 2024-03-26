import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AddAdditionalInfoArgs } from './interface/add-additional-info.interface';
import { RegisterShortSpecArgs } from './interface/register-short-spec.interface';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findIncumbentById(userId: number) {
    return await this.prismaService.incumbentsAdditional.findFirst({
      where: { userId },
      select: {
        company: {
          select: {
            name: true,
          },
        },
        smallJobKind: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async registerShortSpec(args: RegisterShortSpecArgs) {
    return await this.prismaService.incumbentsAdditional.update({
      where: { userId: args.userId },
      data: {
        shortSpec: args.spec,
      },
    });
  }

  async findStudentById(userId: number) {
    return await this.prismaService.studentsAdditional.findFirst({
      where: { userId },
      select: {
        school: {
          select: {
            name: true,
          },
        },
        major: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getMyProfileForIncumbent(userId: number) {
    return await this.prismaService.incumbentsAdditional.findFirst({
      where: { userId },
      select: {
        adviceCount: true,
        estimationCount: true,
        company: { select: { name: true } },
        school: { select: { name: true, branch: true } },
        major: { select: { name: true, dayAndNight: true } },
        smallJobKind: { select: { name: true } },
      },
    });
  }

  async getMyProfileForStudent(userId: number) {
    return await this.prismaService.studentsAdditional.findFirst({
      where: { userId },
      select: {
        totalGrade: true,
        estimationCount: true,
        wishCompany: { select: { name: true } },
        school: { select: { name: true, branch: true } },
        major: { select: { name: true, dayAndNight: true } },
        wishSmallJobKind: { select: { name: true } },
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
