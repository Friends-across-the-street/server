import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userType } from 'prisma/generated/mysql';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { AuthGuard } from 'src/auth/auth.guard';
import { ReportUserDto } from './dto/report.dto';
import { ReportsService } from 'src/reports/reports.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterUserGuard } from 'src/global/guard/multer-user.guard';

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

  @ApiOperation({ summary: '유저 신고' })
  @ApiResponse({ status: 200, description: '유저 신고 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({ status: 403, description: '토큰이 일치하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: '해당 유저가 존재하지 않습니다.',
  })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'userId', type: Number, description: '유저 ID' })
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

  @Post('upload/image/:userId')
  @UseGuards(AuthGuard, MulterUserGuard)
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.MulterS3.File,
    @Request() req,
  ) {
    await this.usersService.uploadImage(req.user, file);
    return file.location;
  }
}
