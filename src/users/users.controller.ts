import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
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
import { RegisterShortSpecDto } from './dto/register-short-spec.interface';

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
  @ApiParam({ name: 'userId', type: Number, description: '유저 ID' })
  @UseGuards(AuthGuard)
  @Post('/additional/:userId')
  async addAdditionalInfo(
    @Param('userId') userId: number,
    @Body() additionalInfo: AddAdditionalInfo,
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
  @ApiParam({ name: 'userId', type: Number, description: '유저 ID' })
  @Get('/:userId')
  async findById(@Param('userId') userId: number) {
    return await this.usersService.findById(userId);
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
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.MulterS3.File,
    @Request() req,
  ) {
    await this.usersService.uploadImage(req.user, file);
    return file.location;
  }

  @ApiOperation({ summary: '현직자 한줄 소개 등록/수정' })
  @ApiResponse({ status: 200, description: '한줄 소개 등록/수정 성공' })
  @ApiResponse({
    status: 400,
    description:
      '정상적인 접근이 아닙니다.(로그인 된 유저의 정보가 현직자가 아니거나 param에 던진 userId가 로그인된 사용자랑 다를경우)',
  })
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
  @Post('/register/spec')
  @UseGuards(AuthGuard)
  async registerShortSpec(
    @Body() dto: RegisterShortSpecDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.usersService.registerShortSpec({ ...dto, user });
  }

  @ApiOperation({ summary: '현직자 한줄 소개 삭제' })
  @ApiResponse({ status: 200, description: '한줄 소개 삭제 성공' })
  @ApiResponse({
    status: 400,
    description:
      '정상적인 접근이 아닙니다.(로그인 된 유저의 정보가 현직자가 아니거나 param에 던진 userId가 로그인된 사용자랑 다를경우)',
  })
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
  @Delete('/remove/spec')
  @UseGuards(AuthGuard)
  async removeShortSpec(@RequestUser() user: UserDataInAuthGuard) {
    return await this.usersService.removeShortSpec({ user });
  }

  @ApiOperation({ summary: '학생 포트폴리오 소개 등록/수정' })
  @ApiResponse({ status: 200, description: '학생 포트폴리오 등록/수정 성공' })
  @ApiResponse({
    status: 400,
    description:
      '걸맞지 않는 확장자로 인한 업로드 실패(엔드포인트 잘못 작성도 포함)',
  })
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
  @Post('/upload/portfolio')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('portfolio'))
  async registerPortfolio(
    @UploadedFile() file: Express.MulterS3.File,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.usersService.registerPortfolio({ file, user });
  }

  @ApiOperation({ summary: '학생 포트폴리오 소개 삭제' })
  @ApiResponse({ status: 200, description: '학생 포트폴리오 삭제 성공' })
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
  @UseGuards(AuthGuard)
  @Delete('/remove/portfolio')
  async removePortfolio(@RequestUser() user: UserDataInAuthGuard) {
    return await this.usersService.removePortfolio({ user });
  }
}
