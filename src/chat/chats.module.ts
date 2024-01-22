import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { PrismaService } from 'src/mongo-prisma.service';

@Module({
  providers: [ChatsService, PrismaService],
  controllers: [ChatsController],
})
export class ChatsModule {}
