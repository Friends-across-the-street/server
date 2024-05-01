import { Injectable } from '@nestjs/common';
import { SendChatDto } from './dto/send.dto';
import { MongoPrismaService } from 'src/mongo-prisma.service';
import { UserDataInAuthGuard } from 'src/global/types/user.type';

@Injectable()
export class ChatService {
  constructor(private mongoPrsimaService: MongoPrismaService) {}

  async send(id: number, dto: SendChatDto, user: UserDataInAuthGuard) {
    return await this.mongoPrsimaService.chat.create({
      data: {
        ...dto,
        senderId: user.id,
        receiverId: id,
        senderType: user.type,
      },
    });
  }

  async getChat(receiveId: number, user: UserDataInAuthGuard) {
    await this.mongoPrsimaService.chat.updateMany({
      where: {
        AND: {
          receiverId: user.id,
          senderId: receiveId,
        },
      },
      data: {
        read: true,
      },
    });

    return await this.mongoPrsimaService.chat.findMany({
      where: {
        OR: [
          {
            AND: {
              senderId: user.id,
              receiverId: receiveId,
            },
          },
          {
            AND: {
              senderId: receiveId,
              receiverId: user.id,
            },
          },
        ],
      },
      orderBy: {
        createdDate: 'desc',
      },
    });
  }
}
