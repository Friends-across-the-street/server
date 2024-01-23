import { Injectable } from '@nestjs/common';
import { SendChatDto } from './dto/send.dto';
import { MongoPrismaService } from 'src/mongo-prisma.service';

@Injectable()
export class ChatService {
  constructor(private mongoPrsimaService: MongoPrismaService) {}

  async send(dto: SendChatDto) {
    return await this.mongoPrsimaService.chat.create({ data: { ...dto } });
  }
}
