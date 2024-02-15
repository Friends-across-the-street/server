import { Module } from '@nestjs/common';
import { CommentService } from './comments.service';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [AuthModule],
  providers: [CommentService, PrismaService],
  exports: [CommentService],
})
export class CommentModule {}
