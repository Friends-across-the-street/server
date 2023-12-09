import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async createPost(@Body() dto: CreatePostDto): Promise<void> {
    const { title, content, incumbentUserId, studentUserId } = dto;

    await this.postsService.createPost({
      ...dto,
    });
  }

  @Get('/:id')
  async getPost(@Param('id') postId: number) {
    return await this.postsService.getPost(postId);
  }
}
