import { Module } from '@nestjs/common';
import { StudentUsersService } from './student_users.service';
import { StudentUsersController } from './student_users.controller';

@Module({
  controllers: [StudentUsersController],
  providers: [StudentUsersService],
})
export class StudentUsersModule {}
