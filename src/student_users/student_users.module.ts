import { Module } from '@nestjs/common';
import { StudentUsersService } from './student_users.service';
import { StudentUsersController } from './student_users.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StudentUsersController],
  providers: [StudentUsersService, PrismaService],
})
export class StudentUsersModule {}
