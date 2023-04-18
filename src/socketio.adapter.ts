import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { IoAdapter } from "@nestjs/platform-socket.io/adapters/io-adapter";
@Injectable()
export class SocketIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    // Add your Socket.IO server configuration here
    return server;
  }
}
