import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prismaService: PrismaService) {}
}
