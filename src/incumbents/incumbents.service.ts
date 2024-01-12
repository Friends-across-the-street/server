import { Injectable } from '@nestjs/common';
import { Gender } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { CreateIncumbentUserDto } from 'src/auth/dto/create-incumbent-user.dto';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IncumbentService {
  constructor(
    private prismaService: PrismaService,
    private authService: AuthService,
  ) {}

  async findById(userId: number) {
    const user = await this.prismaService.incumbents.findFirst({
      where: { id: userId },
    });
    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }
    return user;
  }

  async createMockData() {
    const incumbent = await this.prismaService.incumbents.findFirst({
      where: { email: 'incumbent_test1@naver.com' },
    });
    if (!incumbent) {
      const create: CreateIncumbentUserDto = {
        email: 'incumbent_test1@naver.com',
        password: 'incumbent1',
        name: 'test3',
        age: 15,
        gender: Gender.male,
      };
      await this.authService.signupIncumbentUser(create);
    }
  }
}
