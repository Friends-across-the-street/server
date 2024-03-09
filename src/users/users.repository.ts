import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findIncumbentById(userId: number) {
    return await this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        // TODO additional data 가져오기
      },
    });
  }

  async findStudentById(userId: number) {
    return await this.prismaService.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        // TODO additional data 가져오기
      },
    });
  }
}
