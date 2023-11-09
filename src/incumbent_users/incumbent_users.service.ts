import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IncumbentUsersService {
  constructor(private prismaService: PrismaService) {}

  async findById(userId: number) {
    const user = await this.prismaService.incumbent_users.findFirst({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않음');
    }
    return user;
  }
}
