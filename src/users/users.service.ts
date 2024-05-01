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
import { RegisterPortfolioArgs } from './interface/register-portfolio.interface';
import { RemovePortfolioArgs } from './interface/remove-portfolio.interface';
import { RecommenderUser } from './dto/recommender-user.dto';
import { HttpService } from '@nestjs/axios';
import { ApplyAdditionalInfoArgs } from './interface/apply-additional-info.interface';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';
import { UserType } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly usersReopsitory: UsersRepository,
    private readonly httpService: HttpService,
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
      select: {
        email: true,
        name: true,
        age: true,
        gender: true,
        image: true,
        type: true,
      },
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
    args: AddAdditionalInfoArgs,
    user: UserDataInAuthGuard,
  ) {
    let addedInfoUser;
    switch (user.type) {
      case userType.incumbent:
        await this.usersReopsitory.addAdditionalInfoForIncumbent(user.id, args);
        addedInfoUser = await this.usersReopsitory.findAllInfoForIncumbent(
          user.id,
        );
        break;
      case userType.student:
        await this.usersReopsitory.addAdditionalInfoForStudent(user.id, args);
        addedInfoUser = await this.usersReopsitory.findAllInfoForStudent(
          user.id,
        );
        break;
    }

    let company,
      job,
      school,
      field,
      univ_day_night,
      education,
      univ_main_branch,
      major;

    if (user.type === UserType.incumbent) {
      company = addedInfoUser.incumbent_additional.company;
      job = addedInfoUser.incumbent_additional.job;
      school = addedInfoUser.incumbent_additional.school;
      field = addedInfoUser.incumbent_additional.schoolAffiliate;
      univ_day_night = addedInfoUser.incumbent_additional.schoolDayAndNight;
      education = addedInfoUser.incumbent_additional.schoolDegree;
      univ_main_branch = addedInfoUser.incumbent_additional.schoolBranch;
      major = addedInfoUser.incumbent_additional.major;
    } else {
      company = addedInfoUser.student_additional.wishCompany;
      job = addedInfoUser.student_additional.wishJob;
      school = addedInfoUser.student_additional.school;
      field = addedInfoUser.student_additional.schoolAffiliate;
      univ_day_night = addedInfoUser.student_additional.schoolDayAndNight;
      education = addedInfoUser.student_additional.schoolDegree;
      univ_main_branch = addedInfoUser.student_additional.schoolBranch;
      major = addedInfoUser.student_additional.major;
    }

    const refinedData: ApplyAdditionalInfoArgs = {
      index: addedInfoUser.id + 100000,
      sex: addedInfoUser.gender,
      name: addedInfoUser.name,
      company_name: company.name,
      company_address: company.address,
      longitude: company.longitude,
      latitude: company.latitude,
      company_scale: company.scale,
      company_kind: company.smallJobKind.name,
      big_company_kind: company.bigJobKind.name,
      mid_company_kind: company.midJobKind.name,
      group: job.clusteringGroup,
      job: job.name,
      univ_kind: '대학',
      univ_loc: school.location,
      univ_name: school.name,
      univ_main_branch,
      major: major.name,
      univ_day_night,
      field,
      education,
    };

    await this.applyAdditionalInfo(refinedData);

    return addedInfoUser;
  }

  async registerShortSpec(args: RegisterShortSpecArgs) {
    const user = await this.prismaService.users.findFirst({
      where: { id: args.user.id },
      select: { id: true, type: true },
    });
    if (user.type !== userType.incumbent) {
      throw new CustomException('현직자만 이용 가능합니다.', 400);
    }

    return await this.prismaService.incumbentsAdditional.update({
      where: { userId: args.user.id },
      data: {
        shortSpec: args.spec,
      },
    });
  }

  async removeShortSpec(args: RemoveShortSpecArgs) {
    const user = await this.prismaService.users.findFirst({
      where: { id: args.user.id },
      select: { id: true, type: true },
    });
    if (user.type !== userType.incumbent) {
      throw new CustomException('현직자만 이용 가능합니다.', 400);
    }

    return await this.prismaService.incumbentsAdditional.update({
      where: { userId: args.user.id },
      data: {
        shortSpec: null,
      },
    });
  }

  async registerPortfolio(args: RegisterPortfolioArgs) {
    const user = await this.prismaService.users.findFirst({
      where: { id: args.user.id },
      select: { id: true, type: true },
    });
    if (user.type !== userType.student) {
      throw new CustomException('학생만 이용 가능합니다.', 400);
    }

    return await this.prismaService.studentsAdditional.update({
      where: { userId: args.user.id },
      data: {
        portfolio: args.file.location,
      },
    });
  }

  async removePortfolio(args: RemovePortfolioArgs) {
    const user = await this.prismaService.users.findFirst({
      where: { id: args.user.id },
      select: { id: true, type: true },
    });
    if (user.type !== userType.student) {
      throw new CustomException('학생만 이용 가능합니다.', 400);
    }
    return await this.prismaService.studentsAdditional.update({
      where: { userId: args.user.id },
      data: {
        portfolio: null,
      },
    });
  }

  async findSchool() {
    return await this.prismaService.school.findMany({
      select: { id: true, name: true },
    });
  }

  async findCompany() {
    return await this.prismaService.company.findMany({
      select: {
        id: true,
        name: true,
        bigJobKindId: true,
        midJobKindId: true,
        smallJobKindId: true,
      },
    });
  }

  async findMajor() {
    return await this.prismaService.major.findMany({
      select: { id: true, name: true },
    });
  }

  async findJob() {
    return await this.prismaService.job.findMany({
      select: { id: true, name: true },
    });
  }

  async recommend(recommenderUser: RecommenderUser) {
    // console.log(process.env.AI_URL + '/?page=1&show=2000&user_type=student');
    // return this.httpService.request({
    //   url: process.env.AI_URL + '/?page=1&show=2000&user_type=student',
    //   method: 'get',
    //   data: recommenderUser,
    // });
    const dummy = {
      index: 200000,
      sex: 1,
      name: '공진성',
      company_name: '에어프로덕츠코리아(주)',
      company_address: '경기도 용인시 기흥구 농서로 46번길 3 (농서동)',
      longitude: 127.092364,
      latitude: 37.225152,
      company_scale: '중견기업',
      company_kind: '산업용가스제조업',
      mid_company_kind: '석유·화학·에너지',
      big_company_kind: '제조·화학',
      group: 13,
      job: '기계엔지니어',
      univ_kind: '대학',
      univ_loc: '인천',
      univ_name: '인천대학교',
      univ_main_branch: '본교',
      major: '전자공학과',
      univ_day_night: '주간',
      field: '공학계열',
      education: '학사',
    };
    const data = this.httpService
      .post('/update/', dummy, {
        baseURL: process.env.AI_URL,
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe((item) => item);
    console.log(data);
    return;
  }

  private axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.AI_URL,
    // headers: { 'Content-Type': 'application/json' },
  };

  private async applyAdditionalInfo(args: ApplyAdditionalInfoArgs) {
    // this.httpService.post('/update', args, this.axiosConfig);
    console.log(args);
    return await firstValueFrom(
      this.httpService.post('/update', args, this.axiosConfig),
    );
  }
}
