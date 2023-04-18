import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Product extends Document {

    @Prop({ type: Types.ObjectId, auto: true })
    _id: Types.ObjectId;
  
    @Prop()
    
    userId?: String;

    @Prop({ required: true })
    name?: string;
  
    @Prop({ required: true })
    price?: number;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);