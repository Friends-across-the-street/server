import { Module } from '@nestjs/common';
import { IncumbentUsersService } from './incumbents.service';
import { IncumbentUsersController } from './incumbents.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [IncumbentUsersController],
  providers: [IncumbentUsersService, PrismaService],
})
export class IncumbentUsersModule {}
