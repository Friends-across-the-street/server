import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { userType } from 'prisma/generated/mysql';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id')
  async findById(@Param('id') userId: number, @Query('type') type: userType) {
    return await this.usersService.findById(userId, type);
  }
}
