import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersRepository } from './users.repository';
import { ReportsModule } from 'src/reports/reports.module';

@Module({
  imports: [ReportsModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
