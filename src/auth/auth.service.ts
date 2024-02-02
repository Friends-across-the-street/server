import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Prisma, userType } from '../../prisma/generated/mysql';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import authConfig from '../global/config/authConfig';
import { CustomException } from 'src/global/exception/custom.exception';
import { User, UserAddedPassword } from './interface/validate-user.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  async signup(arg: Prisma.usersCreateInput) {
    const user = await this.validateUserEmail(arg.email);
    if (user) {
      throw new CustomException('현직자 이메일이 이미 존재', 400);
    }
    const hashedPassword = await bcrypt.hash(
      arg.password,
      Number(this.configService.get('BCRYPT_SALT_ROUNDS')),
    );
    arg.password = hashedPassword;
    const createdUser = await this.prismaService.users.create({
      data: arg,
    });
    switch (arg.type) {
      case userType.incumbent:
        await this.prismaService.incumbentsAdditional.create({
          data: {
            userId: createdUser.id,
          },
        });
        break;
      case userType.student:
        await this.prismaService.studentsAdditional.create({
          data: {
            userId: createdUser.id,
          },
        });
        break;
    }

    return user.id;
  }

  private async validateUserEmail(email: string) {
    return await this.prismaService.users.findFirst({
      where: { email },
    });
  }

  async validateUser(email, password) {
    let user: UserAddedPassword = await this.prismaService.users.findFirst({
      select: { id: true, name: true, email: true, type: true, password: true },
      where: { email },
    });

    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new CustomException('비밀번호 불일치', 401);
    }
    delete user.password;
    return { ...user };
  }

  async createToken(user: User) {
    const { id, email, type } = user;
    const payload = { id, email, type };
    return jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: '1d',
      audience: 'dongajul.best',
      issuer: 'dongajul.best',
    });
  }

  async verify(jwtToken: string) {
    try {
      const payload: any = jwt.verify(jwtToken, this.config.jwtSecret);
      const { id, email, type } = payload;
      return { id, email, type };
    } catch (e) {
      throw new CustomException('JWT인증 실패', 400);
    }
  }
}
