import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { ReportsModule } from 'src/reports/reports.module';
import { RecommendsModule } from 'src/recommends/recommends.module';

@Module({
  imports: [AuthModule, RecommendsModule, ReportsModule],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
