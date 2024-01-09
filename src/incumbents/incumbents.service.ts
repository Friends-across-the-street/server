import { Injectable } from '@nestjs/common';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IncumbentUsersService {
  constructor(private prismaService: PrismaService) {}

  async findById(userId: number) {
    const user = await this.prismaService.incumbents.findFirst({
      where: { id: userId },
    });
    if (!user) {
      throw new CustomException('유저가 존재하지 않음', 404);
    }
    return user;
  }
}
