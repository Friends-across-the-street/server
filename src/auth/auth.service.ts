import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Prisma, incumbents, students } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import authConfig from '../global/config/authConfig';
import { CustomException } from 'src/global/exception/custom.exception';
import { UserType } from './enum/user-type.enum';

interface User {
  id: number;
  name: string;
  email: string;
  userType: UserType.INCUMBENT | UserType.STUDENT;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  async signupIncumbentUser(arg: Prisma.incumbentsCreateInput) {
    const isExistIncumbentEmail = await this.validateIncumbentUserEmail(
      arg.email,
    );
    if (isExistIncumbentEmail) {
      throw new CustomException('현직자 이메일이 이미 존재', 400);
    }
    const isExistStudentUser = await this.validateStudentUserEmail(arg.email);
    if (isExistStudentUser) {
      throw new CustomException('학생 이메일이 이미 존재', 400);
    }
    const hashedPassword = await bcrypt.hash(
      arg.password,
      Number(this.configService.get('BCRYPT_SALT_ROUNDS')),
    );
    arg.password = hashedPassword;
    const user = await this.prismaService.incumbents.create({
      data: arg,
    });
    return user.id;
  }

  async signupStudentUser(arg: Prisma.studentsCreateInput) {
    const isExistIncumbentEmail = await this.validateIncumbentUserEmail(
      arg.email,
    );
    if (isExistIncumbentEmail) {
      throw new CustomException('현직자 이메일이 이미 존재', 400);
    }
    const isExistStudentUser = await this.validateStudentUserEmail(arg.email);
    if (isExistStudentUser) {
      throw new CustomException('학생 이메일이 이미 존재', 400);
    }
    const hashedPassword = await bcrypt.hash(
      arg.password,
      Number(this.configService.get('BCRYPT_SALT_ROUNDS')),
    );
    arg.password = hashedPassword;
    const user = await this.prismaService.students.create({
      data: arg,
    });
    return user.id;
  }

  private async validateIncumbentUserEmail(email: string) {
    return await this.prismaService.incumbents.findFirst({
      where: { email },
    });
  }

  private async validateStudentUserEmail(email: string) {
    return await this.prismaService.students.findFirst({
      where: { email },
    });
  }

  async validateUser(email, password) {
    let userType: UserType;
    let user: incumbents | students =
      await this.prismaService.incumbents.findFirst({
        where: { email },
      });
    user !== null
      ? (userType = UserType.INCUMBENT)
      : (userType = UserType.STUDENT);
    if (!user) {
      user = await this.prismaService.students.findFirst({
        where: { email },
      });
    }
    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new CustomException('비밀번호 불일치', 401);
    }
    return { ...user, userType };
  }

  async createToken(user: User) {
    const { id, email, userType } = user;
    const payload = { id, email, userType };
    return jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: '1d',
      audience: 'dongajul.best',
      issuer: 'dongajul.best',
    });
  }

  async verify(jwtToken: string) {
    try {
      const payload: any = jwt.verify(jwtToken, this.config.jwtSecret);
      const { id, email, userType } = payload;
      return { id, email, userType };
    } catch (e) {
      throw new CustomException('JWT인증 실패', 400);
    }
  }
}
