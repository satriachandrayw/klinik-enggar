import { IsNumber, IsString } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
    name: string;

  @IsString()
    type: string;

  @IsString()
    category: string;

  @IsNumber()
    stock: number;

  @IsNumber()
    price: number;

}