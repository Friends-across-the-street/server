import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Prisma, incumbent_users, student_users } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import authConfig from '../global/config/authConfig';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  // TODO 회원가입시 반대쪽 유저 validation 추가
  async signupIncumbentUser(arg: Prisma.incumbent_usersCreateInput) {
    const isExistEmail = await this.validateIncumbentUserEmail(arg.email);
    if (isExistEmail) {
      throw new BadRequestException('해당 이메일이 이미 존재');
    }
    const isExistStudentUser = await this.validateStudentUserEmail(arg.email);
    if (isExistStudentUser) {
      throw new HttpException( //
        {
          message: '학생 이메일이 이미 존재',
          error: 'Bad Request',
          statusCode: 4001,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: '이메일 이미 존재',
        },
      );
    }
    const hashedPassword = await bcrypt.hash(
      arg.password,
      Number(this.configService.get('BCRYPT_SALT_ROUNDS')),
    );
    arg.password = hashedPassword;
    const user = await this.prismaService.incumbent_users.create({
      data: arg,
    });
    return user.id;
  }

  async signupStudentUser(arg: Prisma.student_usersCreateInput) {
    const isExistEmail = await this.validateStudentUserEmail(arg.email);
    if (isExistEmail) {
      throw new BadRequestException('해당 이메일이 이미 존재');
    }
    const isExistIncumbentEmail = await this.validateIncumbentUserEmail(
      arg.email,
    );
    if (isExistIncumbentEmail) {
      throw new HttpException( //
        {
          message: '현직자 이메일이 이미 존재',
          error: 'Bad Request',
          statusCode: 4001,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: '이메일 이미 존재',
        },
      );
    }

    const hashedPassword = await bcrypt.hash(
      arg.password,
      Number(this.configService.get('BCRYPT_SALT_ROUNDS')),
    );
    arg.password = hashedPassword;
    const user = await this.prismaService.student_users.create({
      data: arg,
    });
    return user.id;
  }

  private async validateIncumbentUserEmail(email: string) {
    return await this.prismaService.incumbent_users.findFirst({
      where: { email },
    });
  }

  private async validateStudentUserEmail(email: string) {
    return await this.prismaService.student_users.findFirst({
      where: { email },
    });
  }

  async validateUser(email, password) {
    let user: any = await this.prismaService.incumbent_users.findFirst({
      where: { email },
    });
    if (!user) {
      user = await this.prismaService.student_users.findFirst({
        where: { email },
      });
    }
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않음');
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('비밀번호 불일치');
    }
    return user;
  }

  async createToken(user: User) {
    const payload = { ...user };
    return jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }

  async verify(jwtToken: string) {
    try {
      const payload: any = jwt.verify(jwtToken, this.config.jwtSecret);
      return payload;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
