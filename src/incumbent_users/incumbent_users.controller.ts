import { Controller, Get, Param } from '@nestjs/common';
import { IncumbentUsersService } from './incumbent_users.service';

@Controller('incumbent-users')
export class IncumbentUsersController {
  constructor(private incumbentUsersService: IncumbentUsersService) {}
  @Get('/:id')
  async findById(@Param('id') userId: number) {
    return await this.incumbentUsersService.findById(userId);
  }
}
