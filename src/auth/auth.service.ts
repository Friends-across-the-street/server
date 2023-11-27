import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import authConfig from 'src/config/authConfig';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import {
  CreateIncumbentUserArgs,
  CreateStudentUserArgs,
} from './interface/create-user.interface';

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

  async signupIncumbentUser(arg: CreateIncumbentUserArgs) {
    const isExistEmail = await this.validateIncumbentUserEmail(arg.email);
    if (isExistEmail) {
      throw new BadRequestException('해당 이메일이 이미 존재');
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

  async signupStudentUser(arg: CreateStudentUserArgs) {
    const isExistEmail = await this.validateStudentUserEmail(arg.email);
    if (isExistEmail) {
      throw new BadRequestException('해당 이메일이 이미 존재');
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

  async validateIncumbentUserEmail(email: string) {
    return await this.prismaService.incumbent_users.findFirst({
      where: { email },
    });
  }

  async validateStudentUserEmail(email: string) {
    return await this.prismaService.student_users.findFirst({
      where: { email },
    });
  }

  async validateUser(email, password) {
    let user: any = await this.prismaService.incumbent_users.findFirst({
      where: { email, password },
    });
    if (!user) {
      user = await this.prismaService.student_users.findFirst({
        where: { email, password },
      });
    }
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않음');
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
      const payload = jwt.verify(jwtToken, this.config.jwtSecret) as (
        | jwt.JwtPayload
        | string
      ) &
        User;

      const { id, email } = payload;

      return {
        userId: id,
        email,
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
