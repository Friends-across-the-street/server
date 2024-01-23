import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { MongoPrismaService } from 'src/mongo-prisma.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService, MongoPrismaService, PrismaService],
})
export class ChatsModule {}
