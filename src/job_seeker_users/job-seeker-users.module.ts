import { Module } from '@nestjs/common';
import { JobSeekerUsersController } from './job-seeker-users.controller';
import { JobSeekerUsersService } from './job-seeker-users.service';

@Module({
  controllers: [JobSeekerUsersController],
  providers: [JobSeekerUsersService],
})
export class JobSeekerUsersModule {}
