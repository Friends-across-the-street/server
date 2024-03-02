import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { AdminGuard } from 'src/auth/admin.guard';
import { CreateCategoryDto } from './dto/create.dto';

@ApiTags('CATEGORY')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: '카테고리 전체 조회' })
  @ApiResponse({ status: 200, description: '전체 조회 성공' })
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @ApiOperation({ summary: '카테고리 추가' })
  @ApiResponse({ status: 201, description: '카테고리 추가 성공' })
  @ApiResponse({ status: 403, description: '권한 없음' })
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard, AdminGuard)
  @Post()
  async create(@Body() dto: CreateCategoryDto) {
    return await this.categoryService.create(dto);
  }
}
