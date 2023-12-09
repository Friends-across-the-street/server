import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentUsersModule } from './student_users/student_users.module';
import { IncumbentUsersModule } from './incumbent_users/incumbent_users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import authConfig from './config/authConfig';

@Module({
  imports: [
    IncumbentUsersModule,
    StudentUsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [authConfig],
      isGlobal: true,
    }),
    AuthModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
