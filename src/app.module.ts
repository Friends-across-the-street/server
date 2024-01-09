import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentUsersModule } from './students/students.module';
import { IncumbentUsersModule } from './incumbents/incumbents.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import authConfig from './global/config/authConfig';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CustomExceptionFilter } from './global/custom-exception.filter';
import { TransformInterceptor } from './global/interceptor/transform.interceptor';

@Module({
  imports: [
    IncumbentUsersModule,
    StudentUsersModule,
    ConfigModule.forRoot({
      envFilePath: [
        `${__dirname}/global/config/env/.${process.env.NODE_ENV}.env`,
      ],
      load: [authConfig],
      isGlobal: true,
    }),
    AuthModule,
    PostsModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: CustomExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}
