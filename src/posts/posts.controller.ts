import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './\bdto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async createPost(@Body() dto: CreatePostDto): Promise<void> {
    const { title, content } = dto;
    await this.postsService.createPost({
      title: title,
      content: content,
      // incumbent_user:
      // student_user:
    });
  }

  @Get('/:id')
  async getPost(@Param('id') postId: number) {
    return await this.postsService.getPost(postId);
  }
}
