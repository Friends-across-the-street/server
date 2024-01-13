import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: '카테고리 전체 조회' })
  @ApiResponse({ status: 200, description: '전체 조회 성공' })
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }
}
