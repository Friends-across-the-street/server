import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AuthService, PrismaService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
