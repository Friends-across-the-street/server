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
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentService } from './comment/comment.service';

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
  @ApiParam({ name: 'categoryId', type: Number, description: '카테고리 ID' })
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
  @ApiParam({ name: 'id', type: Number, description: '페이지 ID' })
  @ApiBearerAuth('access-token')
  @ApiTags('POST')
  @Get('/detail/:id')
  @UseGuards(AuthGuard)
  async getPost(
    @Param('id') postId: number,
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
  @ApiParam({ name: 'id', type: Number, description: '게시글 ID' })
  @Put('/:id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') postId: number,
    @Body() dto: UpdatePostDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.postsService.update(postId, dto, user);
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
  @ApiParam({ name: 'postId', type: Number, description: '페이지 ID' })
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
  @ApiParam({ name: 'postId', type: Number, description: '페이지 ID' })
  @ApiTags('POST')
  @Post('/recommend/:postId')
  @UseGuards(AuthGuard)
  async recommend(
    @Param('postId') postId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.recommendService.recommendPost({ postId, user });
  }

  @ApiOperation({ summary: '댓글 작성' })
  @ApiResponse({ status: 201, description: '댓글 생성 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: 'userId가 일치하지 않습니다. or postId 미전송',
  })
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiBearerAuth('access-token')
  @ApiTags('COMMENT')
  @Post('/comment/:postId')
  @UseGuards(AuthGuard)
  async createComment(
    @Param('postId') postId: number,
    @RequestUser() user: UserDataInAuthGuard,
    @Body() dto: CreateCommentDto,
  ) {
    return await this.commentService.create({ postId, user, ...dto });
  }

  @ApiOperation({ summary: '댓글 수정' })
  @ApiResponse({ status: 200, description: '댓글 수정 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: 'userId가 일치하지 않습니다. or commentId 미전송',
  })
  @ApiParam({ name: 'commendId', type: Number, description: '댓글 ID' })
  @ApiBearerAuth('access-token')
  @ApiTags('COMMENT')
  @Put('/comment/:commentId')
  @UseGuards(AuthGuard)
  async updateComment(
    @Param('commentId') commentId: number,
    @RequestUser() user: UserDataInAuthGuard,
    @Body() dto: UpdateCommentDto,
  ) {
    return await this.commentService.update({
      commentId,
      user,
      ...dto,
    });
  }

  @ApiOperation({ summary: '댓글 삭제' })
  @ApiResponse({ status: 200, description: '댓글 삭제 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: 'userId가 일치하지 않습니다. or commentId 미전송',
  })
  @ApiParam({ name: 'commendId', type: Number, description: '댓글 ID' })
  @ApiBearerAuth('access-token')
  @ApiTags('COMMENT')
  @Delete('/comment/:commentId')
  @UseGuards(AuthGuard)
  async deleteComment(
    @Param('commentId') commentId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.commentService.delete(commentId, user);
  }
}
