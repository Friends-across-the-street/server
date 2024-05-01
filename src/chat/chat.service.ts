import { Injectable } from '@nestjs/common';
import { SendChatDto } from './dto/send.dto';
import { MongoPrismaService } from 'src/mongo-prisma.service';
import { PrismaService } from 'src/prisma.service';
import { UserDataInAuthGuard } from 'src/global/types/user.type';

@Injectable()
export class ChatService {
  constructor(
    private mongoPrsimaService: MongoPrismaService,
    private readonly prismaService: PrismaService,
  ) {}

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

  async getRoom(user: UserDataInAuthGuard) {
    // 중복된 채팅 내역은 보관할필요 없기 때문에 Map으로 선언
    const checkUserRoomMap = new Map();
    // 내 id값 더미로 미리 만들기
    checkUserRoomMap.set(user.id, '');
    const allChat = await this.mongoPrsimaService.chat.findMany({
      where: {
        OR: [
          {
            senderId: user.id,
          },
          { receiverId: user.id },
        ],
      },
      orderBy: { createdDate: 'desc' },
    });
    // 시간 내림차순으로 정렬 후, id값이 중복되어 있지않는 마지막 메세지 1개 저장
    for (const chat of allChat) {
      if (
        checkUserRoomMap.has(chat.receiverId) &&
        checkUserRoomMap.has(chat.senderId)
      ) {
        continue;
      }
      if (checkUserRoomMap.has(chat.receiverId)) {
        checkUserRoomMap.set(chat.senderId, chat.message);
      } else {
        checkUserRoomMap.set(chat.receiverId, chat.message);
      }
    }
    // 더미로 만든 내 id값 지우기
    checkUserRoomMap.delete(user.id);

    const refinedData = [];

    // Map에서 반복문 사용해 user정보 받아오기
    const mapIter = checkUserRoomMap.entries();
    let chat = mapIter.next().value;
    while (chat !== undefined) {
      const userId = Number(chat[0]);
      const message = chat[1];
      const user = await this.prismaService.users.findFirst({
        where: { id: userId },
        select: { id: true, name: true },
      });
      refinedData.push({
        ...user,
        message,
      });
      chat = mapIter.next().value;
    }

    return refinedData;
  }
}
