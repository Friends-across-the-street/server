import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { StudentService } from './students/students.service';
import { IncumbentService } from './incumbents/incumbents.service';
import { PostsService } from './posts/posts.service';

@Injectable()
export class InitializeService implements OnModuleInit {
  constructor(
    private categoryService: CategoryService,
    private studentService: StudentService,
    private incumbentService: IncumbentService,
    private postsService: PostsService,
  ) {}

  async onModuleInit() {
    if (process.env.NODE_ENV === 'dev') {
      await this.categoryService.createMockData();
      await this.incumbentService.createMockData();
      await this.studentService.createMockData();
      await this.postsService.createMockData();
    }
  }
}
