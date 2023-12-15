import { Module } from '@nestjs/common';
import { RecommendsService } from './recommends.service';

@Module({
  providers: [RecommendsService]
})
export class RecommendsModule {}
