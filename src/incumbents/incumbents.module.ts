import { Module } from '@nestjs/common';
import { IncumbentService } from './incumbents.service';
import { IncumbentController } from './incumbents.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [IncumbentController],
  providers: [IncumbentService, PrismaService, AuthService],
  exports: [IncumbentService],
})
export class IncumbentModule {}
