import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';
import { ReportsService } from 'src/reports/reports.service';
import { ReportPostDto } from './dto/report-post.dto';
import { RecommendsService } from 'src/recommends/recommends.service';
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { CommentService } from './comments/comments.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService,
    private reportService: ReportsService,
    private recommendService: RecommendsService,
    private commentService: CommentService,
  ) {}

  @ApiOperation({ summary: '게시글 생성' })
  @ApiResponse({ status: 201, description: '게시글 생성 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: 'userId가 일치하지 않습니다. or 카테고리 ID 미전송',
  })
  @ApiTags('POST')
  @ApiBearerAuth('access-token')
  @Post('/')
  @UseGuards(AuthGuard)
  async createPost(
    @RequestUser() user: UserDataInAuthGuard,
    @Body() dto: CreatePostDto,
  ): Promise<void> {
    await this.postsService.create({
      ...dto,
      user,
    });
  }

  @ApiOperation({ summary: '게시글 전체 조회(페이지네이션)' })
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
  @ApiQuery({ name: 'page', type: Number, description: '페이지 쪽수' })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: '페이지당 보이는 개수',
  })
  @ApiQuery({
    name: 'categoryId',
    required: false,
    type: Number,
    description: '카테고리 ID(안 보낼시 전체 게시글 조회)',
  })
  @ApiTags('POST')
  @Get('/')
  async getAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('categoryId') categoryId: number,
  ) {
    return await this.postsService.getPage(page, limit, categoryId);
  }

  @ApiOperation({ summary: '게시글 상세 조회(단일 조회)' })
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({
    status: 403,
    description: '토큰이 일치하지 않습니다.',
  })
  @ApiResponse({
    status: 404,
    description: '유저가 존재하지 않습니다. or 게시글이 존재하지 않습니다.',
  })
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiBearerAuth('access-token')
  @ApiTags('POST')
  @Get('/detail/:postId')
  @UseGuards(AuthGuard)
  async getPost(
    @Param('postId') postId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.postsService.getDetailOnePost(postId, user);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @ApiTags('POST')
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: '게시글 수정 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({
    status: 403,
    description: '토큰이 일치하지 않습니다. or 게시글의 소유자가 아닙니다.',
  })
  @ApiResponse({
    status: 404,
    description: '유저가 존재하지 않습니다. or 게시글이 존재하지 않습니다.',
  })
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @Put('/:postId')
  @UseGuards(AuthGuard)
  async update(
    @Param('postId') postId: number,
    @Body() dto: UpdatePostDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.postsService.update(postId, dto, user);
  }

  @ApiOperation({ summary: '게시글 삭제' })
  @ApiTags('POST')
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: '게시글 삭제 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({
    status: 403,
    description: '토큰이 일치하지 않습니다. or 게시글의 소유자가 아닙니다.',
  })
  @ApiResponse({
    status: 404,
    description: '유저가 존재하지 않습니다. or 게시글이 존재하지 않습니다.',
  })
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @Delete('/:postId')
  @UseGuards(AuthGuard)
  async delete(
    @Param('postId') postId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.postsService.delete(postId, user);
  }

  @ApiOperation({ summary: '게시글 신고' })
  @ApiResponse({ status: 200, description: '게시글 신고 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({ status: 403, description: '토큰이 일치하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: '유저가 존재하지 않습니다. or 게시글이 존재하지 않습니다.',
  })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiTags('POST')
  @Post('/report/:postId')
  @UseGuards(AuthGuard)
  async report(
    @Param('postId') postId: number,
    @Body() dto: ReportPostDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.reportService.reportPost({ postId, ...dto, user });
  }

  @ApiOperation({ summary: '게시글 추천' })
  @ApiResponse({ status: 201, description: '게시글 추천/삭제(토글 방식) 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth 토큰이 존재하지 않습니다',
  })
  @ApiResponse({ status: 403, description: '토큰이 일치하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: '유저가 존재하지 않습니다. or 게시글이 존재하지 않습니다.',
  })
  @ApiBearerAuth('access-token')
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiTags('POST')
  @Post('/recommend/:postId')
  @UseGuards(AuthGuard)
  async recommend(
    @Param('postId') postId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.recommendService.recommendPost({ postId, user });
  }
}
