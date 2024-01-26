import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() public server: Server;

  afterInit(server: Server) {
    console.log('websocket server init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {}

  handleDisconnect(client: any) {}

  @SubscribeMessage('chat')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
