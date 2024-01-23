import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongoPrismaService } from 'src/mongo-prisma.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, MongoPrismaService, PrismaService],
})
export class ChatModule {}
