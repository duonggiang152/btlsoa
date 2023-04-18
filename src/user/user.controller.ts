import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { User } from 'src/lib/entity/UserEntity';
import { UserService } from './user.service';
import { Authentication } from 'src/user/dto/authen.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService) {}

  @Post("register")
  async create(@Body() userData: User): Promise<User> {
    return this.userService.create(userData);
  }
  @Post("authentication")
  async authentication(@Body() authen: Authentication) {
    const user = await this.userService.findByUsername(authen.email)
    console.log(user)
    if(!user) throw new HttpException("user not exist", 401);
    else return {jwt: this.jwtService.sign({id: user.id.toString(),email: user.email }, {secret: "secret"})}
  }
}
