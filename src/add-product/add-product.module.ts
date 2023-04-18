import { Module } from '@nestjs/common';
import { AddProductService } from './add-product.service';
import { AddProductController } from './add-product.controller';
import { Product } from 'src/lib/entity/ProductEntity';
import { ProductSchema } from 'src/lib/entity/ProductEntity';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from 'src/notification/notification.module';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [ 
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    NotificationModule
  ],
  controllers: [AddProductController],
  providers: [AddProductService, NotificationGateway]
})
export class AddProductModule {}
