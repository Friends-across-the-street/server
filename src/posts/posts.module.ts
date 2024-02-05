import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { ReportsModule } from 'src/reports/reports.module';
import { RecommendsModule } from 'src/recommends/recommends.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AuthModule, RecommendsModule, ReportsModule, CommentModule],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
  exports: [PostsService],
})
export class PostsModule {}
