import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('')
export class AppController {
  @ApiOperation({ summary: 'Health Check' })
  @ApiResponse({ status: 200, description: '서버 생존' })
  @ApiTags('Health Check')
  @Get('/healthcheck')
  healthcheck() {
    return 'OK';
  }
}
