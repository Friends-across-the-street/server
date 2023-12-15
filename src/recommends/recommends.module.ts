import { Module } from '@nestjs/common';
import { RecommendsService } from './recommends.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  exports: [RecommendsService],
  providers: [RecommendsService, PrismaService],
})
export class RecommendsModule {}
