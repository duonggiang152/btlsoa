import { Module } from '@nestjs/common';
import { AddProductService } from './add-product.service';
import { AddProductController } from './add-product.controller';
import { Product } from 'src/lib/entity/ProductEntity';
import { ProductSchema } from 'src/lib/entity/ProductEntity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [AddProductController],
  providers: [AddProductService]
})
export class AddProductModule {}
