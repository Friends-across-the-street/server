import {
  Body,
  Controller,
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
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { IncumbentUser, StudentUser } from 'src/global/types/user.type';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('POST')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: '게시글 생성' })
  @ApiResponse({ status: 201, description: '게시글 생성 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({ status: 404, description: 'userId가 일치하지 않습니다.' })
  @ApiBearerAuth('access-token')
  @Post()
  @UseGuards(AuthGuard)
  async createPost(
    @RequestUser() user: IncumbentUser | StudentUser,
    @Body() dto: CreatePostDto,
  ): Promise<void> {
    await this.postsService.create(
      {
        ...dto,
      },
      user,
    );
  }

  @ApiOperation({ summary: '게시글 전체 조회(페이지네이션)' })
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
  @ApiQuery({ name: 'page', type: Number, description: '페이지 쪽수' })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: '페이지당 보이는 개수',
  })
  @Get()
  async getAll(@Query('page') page: number, @Query('limit') limit: number) {
    return await this.postsService.getPage(page, limit);
  }

  @ApiOperation({ summary: '게시글 상세 조회(단일 조회)' })
  @ApiResponse({ status: 200, description: '게시글 조회 성공' })
  @ApiResponse({ status: 204, description: '게시글 찾을 수 없음' })
  @ApiParam({ name: 'id', type: Number, description: '페이지 ID' })
  @ApiBearerAuth('access-token')
  @Get('/:id')
  @UseGuards(AuthGuard)
  async getPost(@Param('id') postId: number) {
    return await this.postsService.getById(postId);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @ApiBearerAuth('access-token')
  @Put('/:id')
  @UseGuards(AuthGuard)
  async update(@Param('id') postId: number, @Body() dto: UpdatePostDto) {
    return await this.postsService.update(postId, dto);
  }
}
