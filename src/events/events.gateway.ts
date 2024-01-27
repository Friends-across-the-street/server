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

interface ChatMessage {
  senderId: number;
  receiverId: number;
  message: string;
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
    console.log(socket.client.request.url);
    const namespace = '/';

    if (!onlineMap[namespace]) {
      onlineMap[namespace] = {};
    }
    onlineMap[namespace][socket.id] = null;
  }

  handleDisconnect(@ConnectedSocket() socket: Socket): any {
    Object.keys(onlineMap).forEach((namespace) => {
      delete onlineMap[namespace][socket.id];
    });
  }

  @SubscribeMessage('chatToServer')
  handleChatEvent(
    @MessageBody() message: ChatMessage,
    @ConnectedSocket() socket: Socket,
  ): void {
    const receiverSocketId = Object.keys(onlineMap['/']).find(
      (id) => onlineMap['/'][id] === message.receiverId,
    );

    if (receiverSocketId) {
      this.server.to(receiverSocketId).emit('chatToClient', message);
    }
  }
}
