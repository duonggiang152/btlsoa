import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server;
 @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    this.server.emit('message', 'message')
  }
}