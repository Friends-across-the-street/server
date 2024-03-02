import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { PrismaService } from 'src/prisma.service';
import { CategoryController } from './category.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [CategoryService, PrismaService],
  exports: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
