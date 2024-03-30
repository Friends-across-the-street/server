import { Module } from '@nestjs/common';
import { VersionsController } from './versions.controller';

@Module({
  providers: [],
  controllers: [VersionsController],
})
export class VersionsModule {}
