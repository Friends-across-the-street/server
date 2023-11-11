import { Controller, Get, Param } from '@nestjs/common';
import { IncumbentUsersService } from './incumbent_users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('incumbent-users')
@Controller('incumbent-users')
export class IncumbentUsersController {
  constructor(private incumbentUsersService: IncumbentUsersService) {}

  @ApiOperation({ summary: 'UserId로 자세한 현직자 정보 찾기' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @Get('/:id')
  async findById(@Param('id') userId: number) {
    return await this.incumbentUsersService.findById(userId);
  }
}
