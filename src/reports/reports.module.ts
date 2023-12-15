import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Module({
  exports: [ReportsService],
  providers: [ReportsService],
})
export class ReportsModule {}
