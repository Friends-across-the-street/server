import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentModule } from './students/students.module';
import { IncumbentModule } from './incumbents/incumbents.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import authConfig from './global/config/authConfig';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CustomExceptionFilter } from './global/custom-exception.filter';
import { TransformInterceptor } from './global/interceptor/transform.interceptor';
import { InitializeService } from './initialize.service';
import { CategoryModule } from './category/category.module';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    StudentModule,
    IncumbentModule,
    ConfigModule.forRoot({
      envFilePath: [
        `${__dirname}/global/config/env/.${process.env.NODE_ENV}.env`,
      ],
      load: [authConfig],
      isGlobal: true,
    }),
    AuthModule,
    PostsModule,
    CategoryModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: CustomExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    PrismaService,
    InitializeService,
  ],
})
export class AppModule {}
