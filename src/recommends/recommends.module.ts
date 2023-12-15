import { Module } from '@nestjs/common';
import { RecommendsService } from './recommends.service';

@Module({
  exports: [RecommendsService],
  providers: [RecommendsService],
})
export class RecommendsModule {}
