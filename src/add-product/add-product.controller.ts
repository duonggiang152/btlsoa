import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AddProductService } from './add-product.service';
import { CreateAddProductDto } from './dto/create-add-product.dto';
import { UpdateAddProductDto } from './dto/update-add-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user.decorator';
@Controller('add-product')
export class AddProductController {
  constructor(private readonly addProductService: AddProductService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@GetUser() user, @Body() createAddProductDto: CreateAddProductDto) {
    console.log("login: add-product:", user)
    return this.addProductService.create(createAddProductDto);
  }
  
  
}
