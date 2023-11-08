import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IncumbentUsersService {
  constructor(private prismaService: PrismaService) {}
}
