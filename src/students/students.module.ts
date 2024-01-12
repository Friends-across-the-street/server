import { Module } from '@nestjs/common';
import { StudentService } from './students.service';
import { StudentController } from './students.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, PrismaService, AuthService],
  exports: [StudentService],
})
export class StudentModule {}
