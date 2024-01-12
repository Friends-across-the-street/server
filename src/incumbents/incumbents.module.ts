import { Module } from '@nestjs/common';
import { IncumbentService } from './incumbents.service';
import { IncumbentController } from './incumbents.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [IncumbentController],
  providers: [IncumbentService, PrismaService],
  exports: [IncumbentService],
})
export class IncumbentModule {}
