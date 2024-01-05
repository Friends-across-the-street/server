import { Controller, Get, Param } from '@nestjs/common';
import { StudentUsersService } from './student_users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('STUDENT-USER')
@Controller('student-users')
export class StudentUsersController {
  constructor(private studentUsersService: StudentUsersService) {}
  @ApiOperation({ summary: 'UserId로 자세한 학생 정보 찾기' })
  @ApiResponse({ status: 200, description: '학생 정보 찾기 성공' })
  @ApiResponse({ status: 404, description: '학생 정보를 찾을 수 없음.' })
  @Get('/:id')
  async findById(@Param('id') userId: number) {
    return await this.studentUsersService.findById(userId);
  }
}
