import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StudentUsersService {
  constructor(private prismaService: PrismaService) {}

  async findById(userId: number) {
    return this.prismaService.incumbent_users.findFirst({
      where: { id: userId },
    });
  }
}
