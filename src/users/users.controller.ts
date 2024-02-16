import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userType } from 'prisma/generated/mysql';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { AuthGuard } from 'src/auth/auth.guard';
import { ReportUserDto } from './dto/report.dto';
import { ReportsService } from 'src/reports/reports.service';

@ApiTags('USER')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly reportsService: ReportsService,
  ) {}

  @ApiOperation({ summary: '유저 정보 조회' })
  @ApiResponse({ status: 200, description: '정보 조회 성공' })
  @ApiResponse({ status: 404, description: '유저 정보 없음' })
  @ApiQuery({
    name: 'type',
    type: Number,
    description: '유저 타입(incumbent/student)',
  })
  @Get('/:id')
  async findById(@Param('id') userId: number, @Query('type') type: userType) {
    return await this.usersService.findById(userId, type);
  }

  @ApiTags('POST')
  @Post('/report/:userId')
  @UseGuards(AuthGuard)
  async report(
    @Param('userId') userId: number,
    @Body() dto: ReportUserDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.reportsService.reportUser({
      targetUserId: userId,
      reason: dto.reason,
      reportingUser: user,
    });
  }
}
