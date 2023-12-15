import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  exports: [ReportsService],
  providers: [ReportsService, PrismaService],
})
export class ReportsModule {}
