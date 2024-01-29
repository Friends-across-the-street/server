import { Injectable } from '@nestjs/common';
import { SendChatDto } from './dto/send.dto';
import { MongoPrismaService } from 'src/mongo-prisma.service';
import { onlineMap } from 'src/events/onlingMap';
import { EventsGateway } from 'src/events/events.gateway';
import { CustomException } from 'src/global/exception/custom.exception';

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

@Injectable()
export class ChatService {
  constructor(
    private mongoPrsimaService: MongoPrismaService,
    private readonly eventsGateway: EventsGateway,
  ) {}

  async send(id: number, dto: SendChatDto) {
    let createdChat;
    try {
      createdChat = await this.mongoPrsimaService.chat.create({
        data: { ...dto },
      });
    } catch {
      throw new CustomException('채팅 메세지 전송에 실패했습니다.', 400);
    }
    const receiverSocketId = getKeyByValue(onlineMap[`/`], Number(id));
    this.eventsGateway.server
      .to(receiverSocketId)
      .emit('chatToServer', dto.message);
    return createdChat;
  }
}
