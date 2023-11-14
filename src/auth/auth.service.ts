import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import authConfig from 'src/config/authConfig';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma.service';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
    private prismaService: PrismaService,
  ) {}

  async signup() {
    //TODO 데이터셋이 확실히 정해졌을때 가입
    return;
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
