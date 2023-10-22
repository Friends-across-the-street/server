import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IncumbentUsersModule } from './incumbent-users/incumbent-users.module';
import { JobSeekerUsersModule } from './job-seeker-users/job-seeker-users.module';

@Module({
  imports: [
    IncumbentUsersModule,
    JobSeekerUsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [], // not yet
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
