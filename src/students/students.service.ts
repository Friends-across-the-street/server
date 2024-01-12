import { Injectable } from '@nestjs/common';
import { Gender } from '@prisma/client';
import { CustomException } from 'src/global/exception/custom.exception';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StudentService {
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

  async createMockData() {
    const student = await this.prismaService.students.findFirst({
      where: { email: 'student_test1@naver.com' },
    });
    if (!student) {
      const create = {
        email: 'student_test1@naver.com',
        password: 'student1',
        name: 'test3',
        age: 20,
        gender: Gender.female,
      };
      await this.prismaService.students.create({
        data: { ...create },
      });
    }
  }
}
