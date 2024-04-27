import { Injectable } from '@nestjs/common';
import { Gender, userType } from 'prisma/generated/mysql';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';
import { AddAdditionalInfoArgs } from './interface/add-additional-info.interface';
import {
  companyScaleDict,
  univDayBightDict,
  univMainBranchDict,
} from 'src/global/util/user-additional-data.constant';

@Injectable()
export class UsersInsertMockService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly usersReopsitory: UsersRepository,
  ) {}

  // async createCompanyMockData() {
  //   const dummyCompany = {
  //     name: '길건너친구들',
  //     address: '인천광역시 연수구 아카데미로 119 인천대학교 B동 513호',
  //     longitude: 37.37807,
  //     latitude: 126.63251,
  //     scale: companyScaleDict.중견기업,
  //     group: 9,
  //   };

  //   const isExist = await this.prismaService.company.findFirst({
  //     where: { name: '길건너친구들' },
  //   });
  //   if (!isExist) {
  //     console.log('Insert Company Mock Data');
  //     await this.prismaService.company.create({
  //       data: {
  //         ...dummyCompany,
  //       },
  //     });
  //   }

  //   const wishDummyCompany = {
  //     name: '네입버',
  //     address: '판교 개발단지',
  //     longitude: 37.37307,
  //     latitude: 126.63951,
  //     scale: companyScaleDict.대기업,
  //     group: 9,
  //   };

  //   const isWishExist = await this.prismaService.company.findFirst({
  //     where: { name: '네입버' },
  //   });
  //   if (!isWishExist) {
  //     await this.prismaService.company.create({
  //       data: {
  //         ...wishDummyCompany,
  //       },
  //     });
  //   }
  // }

  // async createSchoolMockData() {
  //   const dummySchool = [
  //     {
  //       name: '인천대학교',
  //       branch: univMainBranchDict.본교,
  //     },
  //     {
  //       name: '연세대학교',
  //       branch: univMainBranchDict.본교,
  //     },
  //     {
  //       name: '연세대학교',
  //       branch: univMainBranchDict.분교,
  //     },
  //     {
  //       name: '고려대학교',
  //       branch: univMainBranchDict.본교,
  //     },
  //   ];

  //   const isExist = await this.prismaService.school.findFirst({
  //     where: { name: '인천대학교' },
  //   });
  //   if (!isExist) {
  //     console.log('Insert School Mock Data');
  //     await this.prismaService.school.createMany({
  //       data: dummySchool,
  //     });
  //   }
  // }

  // async createMajorMockData() {
  //   const incheonUniv = await this.prismaService.school.findFirst({
  //     where: { name: '인천대학교' },
  //   });

  //   const yonseiUniv = await this.prismaService.school.findFirst({
  //     where: { name: '연세대학교', branch: univMainBranchDict.본교 },
  //   });

  //   const yonseiUnivSub = await this.prismaService.school.findFirst({
  //     where: { name: '연세대학교', branch: univMainBranchDict.분교 },
  //   });

  //   const koreaUniv = await this.prismaService.school.findFirst({
  //     where: { name: '고려대학교' },
  //   });

  //   const dummyMajor = [
  //     {
  //       schoolId: incheonUniv.id,
  //       name: '컴퓨터공학부',
  //       dayAndNight: univDayBightDict.주간,
  //     },
  //     {
  //       schoolId: incheonUniv.id,
  //       name: '정보통신공학과',
  //       dayAndNight: univDayBightDict.주간,
  //     },
  //     {
  //       schoolId: incheonUniv.id,
  //       name: '컴퓨터공학부',
  //       dayAndNight: univDayBightDict.야간,
  //     },
  //     {
  //       schoolId: yonseiUniv.id,
  //       name: '컴퓨터공학부',
  //       dayAndNight: univDayBightDict.주간,
  //     },
  //     {
  //       schoolId: yonseiUniv.id,
  //       name: '디자인학부',
  //       dayAndNight: univDayBightDict.주간,
  //     },
  //     {
  //       schoolId: yonseiUniv.id,
  //       name: '전자공학과',
  //       dayAndNight: univDayBightDict.주간,
  //     },
  //     {
  //       schoolId: koreaUniv.id,
  //       name: '신소재공학과',
  //       dayAndNight: univDayBightDict.주간,
  //     },
  //   ];

  //   const isExist = await this.prismaService.major.findFirst({
  //     where: { name: '컴퓨터공학부', school: incheonUniv },
  //   });
  //   if (!isExist) {
  //     console.log('Insert School Mock Data');
  //     await this.prismaService.major.createMany({
  //       data: dummyMajor,
  //     });
  //   }
  // }

  // async createJobKind() {
  //   const dummyBigKind = [
  //     {
  //       name: 'Banking/financial industry',
  //     },
  //     {
  //       name: 'construction industry',
  //     },
  //     {
  //       name: 'Manufacturing/Chemical',
  //     },
  //     {
  //       name: 'Sales/Distribution',
  //     },
  //     {
  //       name: 'IT·Web·Communication',
  //     },
  //   ];

  //   let isBigKindExist = await this.prismaService.bigJobKind.findUnique({
  //     where: { id: 1 },
  //   });
  //   if (!isBigKindExist) {
  //     console.log('Insert Big-Job-Kind Mock Data');
  //     const data = await this.prismaService.bigJobKind.createMany({
  //       data: dummyBigKind,
  //     });
  //     isBigKindExist = await this.prismaService.bigJobKind.findUnique({
  //       where: { id: 1 },
  //     });
  //   }

  //   const dummyMidKind = [
  //     { bigJobKindId: isBigKindExist.id, name: 'Other finance' },
  //     { bigJobKindId: isBigKindExist.id, name: 'Banking/Finance/Savings' },
  //     { bigJobKindId: isBigKindExist.id, name: 'Securities, insurance, cards' },
  //     {
  //       bigJobKindId: isBigKindExist.id + 1,
  //       name: 'Construction, architecture, civil engineering, construction',
  //     },
  //     {
  //       bigJobKindId: isBigKindExist.id + 2,
  //       name: 'Machinery, equipment, automobile',
  //     },

  //     {
  //       bigJobKindId: isBigKindExist.id + 4,
  //       name: 'IT consulting',
  //     },
  //     {
  //       bigJobKindId: isBigKindExist.id + 4,
  //       name: 'Solution·SI·ERP·CRM',
  //     },
  //     {
  //       bigJobKindId: isBigKindExist.id + 4,
  //       name: 'Network·communication·mobile',
  //     },
  //   ];

  //   let isMidKindExist = await this.prismaService.midJobKind.findUnique({
  //     where: { id: 1 },
  //   });
  //   if (!isMidKindExist) {
  //     console.log('Insert Mid-Job-Kind Mock Data');
  //     await this.prismaService.midJobKind.createMany({
  //       data: dummyMidKind,
  //     });
  //     isMidKindExist = await this.prismaService.midJobKind.findUnique({
  //       where: { id: 1 },
  //     });
  //   }

  //   const dummySmallKind = [
  //     { midJobKindId: isMidKindExist.id, name: 'financial industry' },
  //     {
  //       midJobKindId: isMidKindExist.id,
  //       name: 'Credit investigation collection agency business',
  //     },

  //     { midJobKindId: isMidKindExist.id + 1, name: 'holding company' },

  //     { midJobKindId: isMidKindExist.id + 2, name: 'life insurance business' },
  //     {
  //       midJobKindId: isMidKindExist.id + 2,
  //       name: 'Insurance agency brokerage',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 3,
  //       name: 'road construction industry',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 3,
  //       name: 'Ground preparation construction industry',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 3,
  //       name: 'Civil engineering facility construction business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 4,
  //       name: 'Passenger car manufacturing industry',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 4,
  //       name: 'New automobile parts manufacturing business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 5,
  //       name: 'Computer system integration advisory construction management business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 5,
  //       name: 'Computer system integration advisory construction service business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 6,
  //       name: 'Application software development and supply business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 6,
  //       name: 'System software development and supply business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 6,
  //       name: 'Database online information provision business',
  //     },
  //     {
  //       midJobKindId: isMidKindExist.id + 7,
  //       name: 'telecommunication industry',
  //     },
  //   ];

  //   const isSmallKindExist = await this.prismaService.smallJobKind.findFirst({
  //     where: { name: 'financial industry' },
  //   });
  //   if (!isSmallKindExist) {
  //     console.log('Insert Small-Job-Kind Mock Data');
  //     await this.prismaService.smallJobKind.createMany({
  //       data: dummySmallKind,
  //     });
  //   }
  // }

  async createUsersMockData() {
    const incheonAdditionalInfo: AddAdditionalInfoArgs[] = [
      {
        schoolId: 1,
        majorId: 1,
        companyId: 1,
        bigJobKindId: 5,
        midJobKindId: 6,
        smallJobKindId: 11,
        jobId: 1,
      },
      {
        schoolId: 1,
        majorId: 1,
        companyId: 1,
        bigJobKindId: 5,
        midJobKindId: 7,
        smallJobKindId: 13,
        jobId: 5,
      },
      {
        schoolId: 1,
        majorId: 1,
        companyId: 1,
        bigJobKindId: 5,
        midJobKindId: 7,
        smallJobKindId: 14,
        jobId: 81,
      },
    ];

    const yonseiAdditionalInfo: AddAdditionalInfoArgs[] = [
      {
        schoolId: 2,
        majorId: 1,
        companyId: 1,
        bigJobKindId: 5,
        midJobKindId: 6,
        smallJobKindId: 11,
        jobId: 23,
      },
      {
        schoolId: 2,
        majorId: 2,
        companyId: 2,
        bigJobKindId: 1,
        midJobKindId: 2,
        smallJobKindId: 3,
        jobId: 26,
      },
      {
        schoolId: 3,
        majorId: 4,
        companyId: 2,
        bigJobKindId: 5,
        midJobKindId: 7,
        smallJobKindId: 14,
        jobId: 47,
      },
    ];

    const koreaAdditionalInfo: AddAdditionalInfoArgs[] = [
      {
        schoolId: 4,
        majorId: 5,
        companyId: 1,
        bigJobKindId: 3,
        midJobKindId: 5,
        smallJobKindId: 12,
        jobId: 49,
      },
      {
        schoolId: 4,
        majorId: 3,
        companyId: 2,
        bigJobKindId: 2,
        midJobKindId: 4,
        smallJobKindId: 5,
        jobId: 78,
      },
      {
        schoolId: 4,
        majorId: 4,
        companyId: 1,
        bigJobKindId: 5,
        midJobKindId: 4,
        smallJobKindId: 2,
        jobId: 12,
      },
      {
        schoolId: 4,
        majorId: 2,
        companyId: 2,
        bigJobKindId: 1,
        midJobKindId: 2,
        smallJobKindId: 3,
        jobId: 42,
      },
    ];

    const additionalInfoArr = [
      ...incheonAdditionalInfo,
      ...yonseiAdditionalInfo,
      ...koreaAdditionalInfo,
    ];

    const incumbent = await this.prismaService.users.findFirst({
      where: { email: 'incumbent0@naver.com' },
    });
    if (!incumbent) {
      console.log('Insert Incumbent User Mock Data');
      for (let i = 0; i < additionalInfoArr.length; i++) {
        const email = 'incumbent' + i + '@naver.com';
        const password = 'incumbent' + i;
        const name = '현직자' + i;
        const age = 25 + i;
        const type = userType.incumbent;
        const gender = i % 2 === 0 ? Gender.female : Gender.male;
        const create: CreateUserDto = {
          email,
          password,
          name,
          age,
          gender,
          type,
        };

        await this.authService.signup(create);
        await this.usersReopsitory.addAdditionalInfoForIncumbent(
          i + 1,
          additionalInfoArr[i],
        );
      }
    }

    const student = await this.prismaService.users.findFirst({
      where: { email: 'student0@naver.com' },
    });
    if (!student) {
      console.log('Insert Student User Mock Data');
      for (let i = 0; i < additionalInfoArr.length; i++) {
        const email = 'student' + i + '@naver.com';
        const password = 'student' + i;
        const name = '학생' + i;
        const age = 21 + i;
        const type = userType.student;
        const gender = i % 3 === 0 ? Gender.female : Gender.male;
        const create: CreateUserDto = {
          email,
          password,
          name,
          age,
          gender,
          type,
        };
        await this.authService.signup(create);
        await this.usersReopsitory.addAdditionalInfoForStudent(
          i + 11,
          additionalInfoArr[additionalInfoArr.length - i - 1],
        );
      }
    }
  }
}
