import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersRepository } from './users.repository';
import { ReportsModule } from 'src/reports/reports.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { multerS3Config } from 'src/global/config/multer-s3.config';

@Module({
  imports: [
    ReportsModule,
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        multerS3Config(configService),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
