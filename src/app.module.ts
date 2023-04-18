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
    AddProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
