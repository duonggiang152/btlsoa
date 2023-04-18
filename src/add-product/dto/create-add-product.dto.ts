import { IsOptional, IsNumber } from "class-validator";

export class CreateAddProductDto {
    @IsOptional()
    id: string;

    @IsOptional()
    name: string;

    @IsOptional()
    @IsNumber()
    price: number
}
