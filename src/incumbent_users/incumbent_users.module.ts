import { Module } from '@nestjs/common';
import { IncumbentUsersService } from './incumbent_users.service';
import { IncumbentUsersController } from './incumbent_users.controller';

@Module({
  controllers: [IncumbentUsersController],
  providers: [IncumbentUsersService],
})
export class IncumbentUsersModule {}
