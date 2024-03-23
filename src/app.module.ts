import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { VersionsModule } from './versions/versions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `${__dirname}/global/config/env/.${process.env.NODE_ENV}.env`,
      ],
      load: [authConfig],
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    CategoryModule,
    ChatModule,
    EventsModule,
    VersionsModule,
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
