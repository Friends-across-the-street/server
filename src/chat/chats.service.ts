import { Injectable } from '@nestjs/common';
import { SendChatDto } from './dto/send.dto';
import { PrismaService } from 'src/mongo-prisma.service';

@Injectable()
export class ChatsService {
  constructor(private readonly mongoPrsimaService: PrismaService) {}
  async send(dto: SendChatDto) {
    return this.mongoPrsimaService.chat.create({ data: { ...dto } });
  }
}
