import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { ReportsModule } from 'src/reports/reports.module';
import { RecommendsModule } from 'src/recommends/recommends.module';
import { CommentsController } from './comments/comments.controller';
import { CommentModule } from './comments/comments.module';

@Module({
  imports: [AuthModule, RecommendsModule, ReportsModule, CommentModule],
  controllers: [PostsController, CommentsController],
  providers: [PostsService, PrismaService],
  exports: [PostsService],
})
export class PostsModule {}
