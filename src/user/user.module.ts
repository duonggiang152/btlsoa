import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../lib/entity/UserEntity';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService, JwtService]
})
export class UserModule {}
