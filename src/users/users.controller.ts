import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { userType } from 'prisma/generated/mysql';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('USER')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '유저 정보 조회' })
  @ApiResponse({ status: 200, description: '정보 조회 성공' })
  @ApiResponse({ status: 404, description: '유저 정보 없음' })
  @ApiQuery({
    name: 'type',
    type: Number,
    description: '유저 타입(incumbent/student)',
  })
  @Get('/:id')
  async findById(@Param('id') userId: number, @Query('type') type: userType) {
    return await this.usersService.findById(userId, type);
  }
}
