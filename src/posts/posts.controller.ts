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
import {
  RefineUserData,
  UserDataInAuthGuard,
} from 'src/global/types/user.type';
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
import { RefineUserById } from 'src/global/decorator/refined-user.decorator';
import { RecommendsService } from 'src/recommends/recommends.service';
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { CommentService } from 'src/comment/comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('POST')
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
  @ApiBearerAuth('access-token')
  @Post('/:categoryId')
  @UseGuards(AuthGuard)
  async createPost(
    @RefineUserById() user: RefineUserData,
    @Param('categoryId') categoryId: number,
    @Body() dto: CreatePostDto,
  ): Promise<void> {
    await this.postsService.create({
      ...dto,
      ...user,
      categoryId,
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
  @Get('/')
  async getAll(@Query('page') page: number, @Query('limit') limit: number) {
    return await this.postsService.getPage(page, limit);
  }

  @ApiOperation({ summary: '게시글 전체 조회(페이지네이션)' })
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
  @ApiQuery({ name: 'page', type: Number, description: '페이지 쪽수' })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: '페이지당 보이는 개수',
  })
  @ApiParam({
    name: 'categoryId',
    type: Number,
    description: '카테고리 ID',
  })
  @Get('/:categoryId')
  async getAllByCategory(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Param('categoryId') categoryId: number,
  ) {
    return await this.postsService.getPageByCategory(page, limit, categoryId);
  }

  @ApiOperation({ summary: '게시글 상세 조회(단일 조회)' })
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
  @ApiResponse({ status: 404, description: '게시글 찾을 수 없음' })
  @ApiParam({ name: 'id', type: Number, description: '페이지 ID' })
  @ApiBearerAuth('access-token')
  @Get('/detail/:id')
  @UseGuards(AuthGuard)
  async getPost(
    @Param('id') postId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.postsService.getById(postId, user);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @ApiBearerAuth('access-token')
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
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
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
  @Post('/report/:postId')
  @UseGuards(AuthGuard)
  async report(
    @Param('postId') postId: number,
    @Body() dto: ReportPostDto,
    @RefineUserById() user: RefineUserData,
  ) {
    return await this.reportService.reportPost({ postId, ...dto, ...user });
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
  @Post('/recommend/:postId')
  @UseGuards(AuthGuard)
  async recommend(
    @Param('postId') postId: number,
    @RefineUserById() user: RefineUserData,
  ) {
    return await this.recommendService.recommendPost({ postId, ...user });
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
  @Post('/comment/:postId')
  @UseGuards(AuthGuard)
  async createComment(
    @Param('postId') postId: number,
    @RefineUserById() user: RefineUserData,
    @Body() dto: CreateCommentDto,
  ) {
    return await this.commentService.create({ postId, ...user, ...dto });
  }

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

  @Delete('/comment/:commentId')
  @UseGuards(AuthGuard)
  async deleteComment(
    @Param('commentId') commentId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.commentService.delete(commentId, user);
  }
}
