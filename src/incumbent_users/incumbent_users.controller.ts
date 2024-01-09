import { Controller, Get, Param } from '@nestjs/common';
import { IncumbentUsersService } from './incumbent_users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('INCUMBENT-USER')
@Controller('incumbent-users')
export class IncumbentUsersController {
  constructor(private incumbentUsersService: IncumbentUsersService) {}

  @ApiOperation({ summary: 'UserId로 현직자 정보 찾기' })
  @ApiResponse({ status: 200, description: '현직자 정보 찾기 성공' })
  @ApiResponse({ status: 404, description: '현직자 정보 찾을 수 없음' })
  @Get('/:id')
  async findById(@Param('id') userId: number) {
    return await this.incumbentUsersService.findById(userId);
  }
}
