import { Injectable } from '@nestjs/common';
import { User } from '../lib/entity/UserEntity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userData: User): Promise<User> {
    const user = new this.userModel(userData);
    return user.save();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ email: username }).exec();
  }
}
