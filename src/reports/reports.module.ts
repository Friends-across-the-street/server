import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { ReportsRepository } from './reports.repository';

@Module({
  imports: [AuthModule],
  providers: [ReportsService, ReportsRepository, PrismaService],
  exports: [ReportsService],
})
export class ReportsModule {}
