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
  ApiBody,
  ApiConsumes,
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
import { AddAdditionalInfo } from './dto/add-additional-info.dto';

@ApiTags('USER')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly reportsService: ReportsService,
  ) {}

  @ApiOperation({ summary: '유저 상세 정보 등록' })
  @ApiResponse({ status: 200, description: '유저 상세 정보 등록 성공' })
  @ApiResponse({ status: 403, description: '토큰이 일치하지 않습니다.' })
  @ApiResponse({ status: 404, description: '유저 정보 없음' })
  @UseGuards(AuthGuard)
  @Post('/additional/:id')
  async addAdditionalInfo(
    @Param('id') userId: number,
    @Body() additionalInfo,
    user: UserDataInAuthGuard,
  ) {
    return await this.usersService.addAdditionalInfo(
      userId,
      additionalInfo,
      user,
    );
  }

  @ApiOperation({ summary: '내 정보 조회' })
  @ApiResponse({ status: 200, description: '정보 조회 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({ status: 404, description: '유저 정보 없음' })
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard)
  @Get('/mypage')
  async getMyProfile(@RequestUser() user: UserDataInAuthGuard) {
    return await this.usersService.getMyProfile(user);
  }

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

  @Post('/additional-info/:userId')
  @UseGuards(AuthGuard)
  async addAddtionalInfo(
    @Param('userId') userId: number,
    @Body() dto: AddAdditionalInfo,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.usersService.addAdditionalInfo(userId, dto, user);
  }

  @ApiOperation({ summary: '유저 이미지 업로드' })
  @ApiResponse({ status: 201, description: '유저 이미지 업로드 성공' })
  @ApiResponse({
    status: 400,
    description:
      '걸맞지 않는 확장자 및 이미지 업로드 실패(엔드포인트 잘못 작성도 포함)',
  })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({
    status: 403,
    description:
      '토큰이 일치하지 않습니다.(Param에 작성된 userId와 현재 갖고있는 토큰의 로그인된 유저 Id가 다를 경우도 포함)',
  })
  @ApiResponse({
    status: 404,
    description: '해당 유저가 존재하지 않습니다.',
  })
  @ApiBearerAuth('access-token')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('upload/image')
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
