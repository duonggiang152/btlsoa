import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AddProductService } from './add-product.service';
import { CreateAddProductDto } from './dto/create-add-product.dto';
import { UpdateAddProductDto } from './dto/update-add-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user.decorator';
import { NotificationGateway } from 'src/notification/notification.gateway';
@Controller('add-product')
export class AddProductController {
  constructor(private readonly addProductService: AddProductService, private readonly notificationGateway: NotificationGateway) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@GetUser() user, @Body() createAddProductDto: CreateAddProductDto) {
    console.log("login: add-product:", user);

    for (let i = 2; i < 15; i++) {
      setTimeout(() => {
        this.notificationGateway.handleMessage({ user: user.email, id: i, result: (i % 2 == 0 ? false : true) })
      }, i * 1000);
    }
    setTimeout(() => {
      this.notificationGateway.handleDoneMessage({ user: user.email, result: false })
    }, 30000)
    return this.addProductService.create(createAddProductDto, user);
  }


}
