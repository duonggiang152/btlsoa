import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AddProductModule } from './add-product/add-product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { SocketIoAdapter } from './socketio.adapter';
import { AppGateway } from './app.gateway';
import { MiddlewareConsumer, } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    AuthModule,
     UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    // MongooseModule.forRoot('mongodb://root:example@localhost:27017/btlsoa'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URI"),
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'', 'static'),
    }),
    AddProductModule,
    NotificationModule,
    // Add the adapter to the providers array
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {
  
}
