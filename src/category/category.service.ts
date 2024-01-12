import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async createMockData() {
    const categories = await this.prismaService.category.findMany();
    if (categories.length === 0) {
      await this.prismaService.category.createMany({
        data: [
          { name: '질문 게시판' },
          { name: '구인 게시판' },
          { name: '자유 게시판' },
        ],
      });
    }
  }
}
