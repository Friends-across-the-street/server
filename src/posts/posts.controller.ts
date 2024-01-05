import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestUser } from 'src/global/decorator/request-user.decorator';
import { IncumbentUser, StudentUser } from 'src/global/types/user.type';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

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

  @Get()
  async getAll(@Query('page') page: number, @Query('limit') limit: number) {
    return await this.postsService.getPage(page, limit);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async getPost(@Param('id') postId: number) {
    return await this.postsService.getById(postId);
  }
}
