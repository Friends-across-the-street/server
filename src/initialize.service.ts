import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { PostsService } from './posts/posts.service';
import { UsersService } from './users/users.service';
import { UsersInsertMockService } from './users/users.insert-mock.service';

@Injectable()
export class InitializeService implements OnModuleInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly usersInsertMockService: UsersInsertMockService,
    private readonly postsService: PostsService,
  ) {}

  async onModuleInit() {
    if (process.env.NODE_ENV === 'dev') {
      await this.categoryService.createMockData();
      await this.usersInsertMockService.createUsersMockData();
      await this.postsService.createMockData();
    }
  }
}
