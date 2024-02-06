import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { PostsService } from './posts/posts.service';
import { UsersService } from './users/users.service';

@Injectable()
export class InitializeService implements OnModuleInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  async onModuleInit() {
    if (process.env.NODE_ENV === 'dev') {
      console.log('Insert Tag Mock Data');
      await this.categoryService.createMockData();
      console.log('Insert User Mock Data');
      await this.usersService.createMockData();
      console.log('Insert Post Mock Data');
      await this.postsService.createMockData();
    }
  }
}
