import { Controller, Get, Param } from '@nestjs/common';
import { StudentUsersService } from './student_users.service';

@Controller('student-users')
export class StudentUsersController {
  constructor(private studentUsersService: StudentUsersService) {}
  @Get('/:id')
  async findById(@Param('id') userId: number) {
    return await this.studentUsersService.findById(userId);
  }
}
