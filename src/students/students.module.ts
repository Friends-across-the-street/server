import { Module } from '@nestjs/common';
import { StudentUsersService } from './students.service';
import { StudentUsersController } from './students.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StudentUsersController],
  providers: [StudentUsersService, PrismaService],
})
export class StudentUsersModule {}
