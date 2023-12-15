import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecommendsService {
  constructor(private prismaService: PrismaService) {}
}
