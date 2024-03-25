import { Controller, Get } from '@nestjs/common';

@Controller('versions')
export class VersionsController {
  constructor() {}

  @Get()
  async findVersion() {
    return {
      version: process.env.VERSION,
      requiredUpdate: process.env.REQUIRED_UPDATE,
    };
  }
}
