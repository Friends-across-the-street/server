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
        job: {
          select: {
            name: true,
          },
        },
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
        wishCompany: {
          select: {
            name: true,
          },
        },
        wishJob: {
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
        school: { select: { name: true } },
        major: { select: { name: true } },
        job: { select: { name: true } },
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
        school: { select: { name: true } },
        major: { select: { name: true } },
        wishJob: { select: { name: true } },
      },
    });
  }

  async addAdditionalInfoForIncumbent(
    userId: number,
    args: AddAdditionalInfoArgs,
  ) {
    return await this.prismaService.incumbentsAdditional.updateMany({
      where: { userId },
      data: {
        schoolId: args.schoolId,
        majorId: args.majorId,
        companyId: args.companyId,
        bigJobId: args.bigJobKindId,
        midJobId: args.midJobKindId,
        smallJobId: args.smallJobKindId,
        jobId: args.jobId,
        schoolAffiliate: args.schoolAffiliate,
        schoolBranch: args.schoolBranch,
        schoolDayAndNight: args.schoolDayAndNight,
        schoolDegree: args.schoolDegree,
      },
    });
  }

  async addAdditionalInfoForStudent(
    userId: number,
    args: AddAdditionalInfoArgs,
  ) {
    return await this.prismaService.studentsAdditional.updateMany({
      where: { userId },
      data: {
        schoolId: args.schoolId,
        majorId: args.majorId,
        wishCompanyId: args.companyId,
        wishBigJobId: args.bigJobKindId,
        wishMidJobId: args.midJobKindId,
        wishSmallJobId: args.smallJobKindId,
        wishJobId: args.jobId,
        schoolAffiliate: args.schoolAffiliate,
        schoolBranch: args.schoolBranch,
        schoolDayAndNight: args.schoolDayAndNight,
        schoolDegree: args.schoolDegree,
      },
    });
  }

  async findAllInfoForStudent(userId: number) {
    return this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        gender: true,
        type: true,
        student_additional: {
          select: {
            schoolAffiliate: true,
            schoolDayAndNight: true,
            schoolBranch: true,
            schoolDegree: true,
            wishCompany: {
              select: {
                name: true,
                address: true,
                longitude: true,
                latitude: true,
                scale: true,
                bigJobKind: {
                  select: {
                    name: true,
                  },
                },
                midJobKind: {
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
            },
            wishJob: {
              select: {
                name: true,
                clusteringGroup: true,
              },
            },
            school: {
              select: {
                name: true,
                location: true,
              },
            },
            major: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async findAllInfoForIncumbent(userId: number) {
    return this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        gender: true,
        type: true,
        incumbent_additional: {
          select: {
            schoolAffiliate: true,
            schoolDayAndNight: true,
            schoolBranch: true,
            schoolDegree: true,
            company: {
              select: {
                name: true,
                address: true,
                longitude: true,
                latitude: true,
                scale: true,
                bigJobKind: {
                  select: {
                    name: true,
                  },
                },
                midJobKind: {
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
            },
            job: {
              select: {
                name: true,
                clusteringGroup: true,
              },
            },
            school: {
              select: {
                name: true,
                location: true,
              },
            },
            major: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
