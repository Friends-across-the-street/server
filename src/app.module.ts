import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentUsersModule } from './student_users/student_users.module';
import { IncumbentUsersModule } from './incumbent_users/incumbent_users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    IncumbentUsersModule,
    StudentUsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [], // not yet
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
