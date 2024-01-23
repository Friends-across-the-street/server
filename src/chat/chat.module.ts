import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongoPrismaService } from 'src/mongo-prisma.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [AuthModule],
  controllers: [ChatController],
  providers: [ChatService, MongoPrismaService, PrismaService, ChatGateway],
})
export class ChatModule {}
