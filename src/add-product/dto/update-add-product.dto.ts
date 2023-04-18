import { PartialType } from '@nestjs/mapped-types';
import { CreateAddProductDto } from './create-add-product.dto';

export class UpdateAddProductDto extends PartialType(CreateAddProductDto) {}
