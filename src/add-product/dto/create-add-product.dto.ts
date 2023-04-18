import { IsOptional } from "class-validator";

export class CreateAddProductDto {
    @IsOptional()
    id: string;
    @IsOptional()
    name: string;
    @IsOptional()
    price: number
}
