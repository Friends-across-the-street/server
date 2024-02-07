import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReportsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async reportPost() {}

  async reportComment() {}

  async reportUser() {}
}
