import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('VERSION')
@Controller('versions')
export class VersionsController {
  constructor() {}

  @ApiOperation({ summary: '버전 찾기' })
  @ApiResponse({ status: 200, description: '버전 찾기 성공' })
  @Get()
  async findVersion() {
    return {
      version: process.env.VERSION,
      requiredUpdate: process.env.REQUIRED_UPDATE,
    };
  }
}
