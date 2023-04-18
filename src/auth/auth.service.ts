import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/lib/entity/UserEntity';
import { Model, Mongoose } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@Inject(UserService)private readonly UserService:UserService,
              @InjectModel(User.name) private userModel: Model<User>) {}

  validateUserById(id: string) {
      return this.userModel.findById(id)
  }
}
