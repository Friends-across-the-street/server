import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma.service';
import { ReportPostArgs } from './interface/report.interface';

@Injectable()
export class ReportsService {
  constructor(private prismaService: PrismaService) {}

  // @UseGuards(AuthGuard)
  // async reportPost(args: ReportPostArgs) {
  //   return await this.prismaService.reported_posts.create({
  //     data: args,
  //   });
  // }
}
