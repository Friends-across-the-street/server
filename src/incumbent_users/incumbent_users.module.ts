import { Module } from '@nestjs/common';
import { IncumbentUsersService } from './incumbent_users.service';
import { IncumbentUsersController } from './incumbent_users.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [IncumbentUsersController],
  providers: [IncumbentUsersService, PrismaService],
})
export class IncumbentUsersModule {}
