import { Injectable } from '@nestjs/common';
import { CreateAddProductDto } from './dto/create-add-product.dto';
import { UpdateAddProductDto } from './dto/update-add-product.dto';
import { Product } from 'src/lib/entity/ProductEntity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AddProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}
  create(createAddProductDto: CreateAddProductDto) {
    console.log(createAddProductDto)
    const product = new this.productModel(createAddProductDto);
    
    return product.save();
  }

 
}
