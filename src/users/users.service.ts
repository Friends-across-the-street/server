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
import { HttpService } from '@nestjs/axios';
import { ApplyAdditionalInfoArgs } from './interface/apply-additional-info.interface';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RecommendRate } from './interface/recommend-rate.interface';

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

    let additionalData,
      companyName,
      smallJobKindName,
      schoolName,
      majorName,
      spec,
      portfolio;
    switch (user.type) {
      case userType.incumbent:
        additionalData = await this.usersReopsitory.findIncumbentById(userId);
        companyName = additionalData.company.name;
        smallJobKindName = additionalData.job.name;
        schoolName = additionalData.school.name;
        majorName = additionalData.major.name;
        spec = additionalData.shortSpec;
        break;
      case userType.student:
        additionalData = await this.usersReopsitory.findStudentById(userId);
        companyName = additionalData.wishCompany.name;
        smallJobKindName = additionalData.wishJob.name;
        schoolName = additionalData.school.name;
        majorName = additionalData.major.name;
        portfolio = additionalData.portfolio;
        break;
    }

    return {
      ...user,
      additionalInfo: {
        company: companyName ?? null,
        job: smallJobKindName ?? null,
        school: schoolName ?? null,
        major: majorName ?? null,
        spec: spec ?? null,
        portfolio: portfolio ?? null,
      },
    };
  }

  async getMyProfile(user: UserDataInAuthGuard) {
    let additionalData, companyName, smallJobKindName, job, school, major;
    const userData = await this.prismaService.users.findFirst({
      where: { id: user.id },
      select: {
        id: true,
        email: true,
        name: true,
        age: true,
        gender: true,
        image: true,
        type: true,
      },
    });
    let portfolio, spec;
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
        job = additionalData.job ? additionalData.job.name : null;
        major = additionalData.major ? additionalData.major.name : null;
        school = additionalData.school ? additionalData.school.name : null;
        spec = additionalData.shortSpec;
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
        job = additionalData.wishJob ? additionalData.wishJob.name : null;
        major = additionalData.major ? additionalData.major.name : null;
        school = additionalData.school ? additionalData.school.name : null;
        portfolio = additionalData.portfolio;
        delete additionalData.wishJob;
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
        job,
        major,
        school,
        portfolio: portfolio ?? null,
        spec: spec ?? null,
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
    switch (user.type) {
      case userType.incumbent:
        await this.usersReopsitory.addAdditionalInfoForIncumbent(user.id, args);
        break;
      case userType.student:
        await this.usersReopsitory.addAdditionalInfoForStudent(user.id, args);
        break;
    }

    const refinedData = await this.refinedForAI(user);

    await this.applyAdditionalInfo(refinedData);

    return refinedData;
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

  async recommend(
    show: number,
    page: number,
    user: UserDataInAuthGuard,
    recommendRate: RecommendRate,
  ) {
    const userData = await this.refinedForAI(user);
    const recommender = await this.findRecommender(
      page,
      show,
      userData,
      user,
      recommendRate,
    );
    return recommender.data;
  }

  private axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.AI_URL,
  };

  private async applyAdditionalInfo(args: ApplyAdditionalInfoArgs) {
    try {
      return await firstValueFrom(
        this.httpService.post('/update', args, this.axiosConfig),
      );
    } catch (e) {
      throw new CustomException('AI서버에 동기화 실패', 400);
    }
  }

  private async findRecommender(
    page: number,
    show: number,
    data: ApplyAdditionalInfoArgs,
    user: UserDataInAuthGuard,
    recommendRate: RecommendRate,
  ) {
    const type = user.type === userType.incumbent ? 'consultant' : 'student';
    try {
      return await firstValueFrom(
        this.httpService.post(
          `/?page=${page}&show=${show}&user_type=${type}&univ_rate=${recommendRate.univRate}&company_rate=${recommendRate.companyRate}&=job_rate=${recommendRate.jobRate}`,
          data,
          {
            ...this.axiosConfig,
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      );
    } catch (e) {
      throw new CustomException('추천인 조회 실패', 400);
    }
  }

  private async refinedForAI(user: UserDataInAuthGuard) {
    let addedInfoUser,
      company,
      job,
      school,
      field,
      univ_day_night,
      education,
      univ_main_branch,
      major;

    if (user.type === userType.incumbent) {
      addedInfoUser = await this.usersReopsitory.findAllInfoForIncumbent(
        user.id,
      );
      company = addedInfoUser.incumbent_additional.company;
      job = addedInfoUser.incumbent_additional.job;
      school = addedInfoUser.incumbent_additional.school;
      field = addedInfoUser.incumbent_additional.schoolAffiliate;
      univ_day_night = addedInfoUser.incumbent_additional.schoolDayAndNight;
      education = addedInfoUser.incumbent_additional.schoolDegree;
      univ_main_branch = addedInfoUser.incumbent_additional.schoolBranch;
      major = addedInfoUser.incumbent_additional.major;
    } else {
      addedInfoUser = await this.usersReopsitory.findAllInfoForStudent(user.id);
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
      sex: addedInfoUser.gender === 'female' ? 1 : 0,
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

    return refinedData;
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  private async totalUpdateForAI() {
    try {
      return await firstValueFrom(
        this.httpService.get('/total_update', this.axiosConfig),
      );
    } catch (e) {
      throw new CustomException('AI 모델 업데이트 실패', 400);
    }
  }
}
//
