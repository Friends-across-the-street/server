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
        incumbent_additional: {
          select: {
            companyName: true,
            jobDescription: true,
          },
        },
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
        student_additional: {
          select: {
            school: true,
            major: true,
          },
        },
      },
    });
  }
}
