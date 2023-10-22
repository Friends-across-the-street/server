import { Module } from '@nestjs/common';
import { IncumbentUsersService } from './incumbent-users.service';
import { IncumbentUsersController } from './incumbent-users.controller';

@Module({
  controllers: [IncumbentUsersController],
  providers: [IncumbentUsersService],
})
export class IncumbentUsersModule {}
