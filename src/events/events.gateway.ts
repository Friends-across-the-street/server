// chat.gateway.ts

import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { onlineMap } from './onlingMap';
import { CustomException } from 'src/global/exception/custom.exception';

interface ChatMessage {
  senderId: number;
  receiverId: number;
  text: string;
}

@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: Server): any {
    console.log('WebSocket initialized');
  }

  handleConnection(@ConnectedSocket() socket: Socket): any {
    const namespace = '/';
    const urlParams = new URLSearchParams(socket.client.request.url);
    const onlineUserId = urlParams.get('/socket.io/?user');

    if (!onlineMap[namespace]) {
      onlineMap[namespace] = {};
    }

    let isExist = false;
    let checkKey;
    Object.entries(onlineMap['/']).forEach(([key, value]) => {
      if (value === onlineUserId) {
        checkKey = key;
        isExist = true;
      }
    });
    if (isExist) {
      Object.keys(onlineMap).forEach((namespace) => {
        delete onlineMap[namespace][checkKey];
      });
    }
    onlineMap[namespace][socket.id] = onlineUserId;
    console.log(onlineMap);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket): any {
    Object.keys(onlineMap).forEach((namespace) => {
      delete onlineMap[namespace][socket.id];
    });
  }

  @SubscribeMessage('chatToServer')
  handleChatEvent(
    @MessageBody() message: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    const refinedMessage: ChatMessage = JSON.parse(message);
    if (refinedMessage.senderId !== Number(socket.handshake.query.user)) {
      throw new CustomException('채팅 보낼 권한이 없습니다.', 403);
    }

    const receiverSocketId = Object.keys(onlineMap['/']).find((id) => {
      return Number(onlineMap['/'][id]) === refinedMessage.receiverId;
    });

    if (receiverSocketId) {
      this.server.to(receiverSocketId).emit('chatToServer', {
        message: refinedMessage.text,
        senderId: refinedMessage.senderId,
      });
    } else {
      throw new CustomException('채팅 상대가 온라인이 아닙니다.', 404);
    }
  }
}
//
