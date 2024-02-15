import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
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
import { ReportsService } from 'src/reports/reports.service';
import { RecommendsService } from 'src/recommends/recommends.service';
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { CommentService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ReportCommentDto } from './dto/report-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private reportService: ReportsService,
    private recommendService: RecommendsService,
    private commentService: CommentService,
  ) {}

  @ApiOperation({ summary: '댓글 작성' })
  @ApiResponse({ status: 201, description: '댓글 생성 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description:
      'userId가 일치하지 않습니다. or 부모 댓글의 ID가 일치하지 않습니다',
  })
  @ApiParam({ name: 'postId', type: Number, description: '게시글 ID' })
  @ApiBearerAuth('access-token')
  @ApiTags('COMMENT')
  @Post('/:postId')
  @UseGuards(AuthGuard)
  async create(
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
  @Put('/:commentId')
  @UseGuards(AuthGuard)
  async update(
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
  @Delete('/:commentId')
  @UseGuards(AuthGuard)
  async delete(
    @Param('commentId') commentId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.commentService.delete(commentId, user);
  }

  @Post('/report/:commentId')
  @UseGuards(AuthGuard)
  async report(
    @Param('commentId') commentId: number,
    @Body() dto: ReportCommentDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.reportService.reportComment({ commentId, ...dto, user });
  }
}
