import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ example: 1 })
  customer_id: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ example: 1 })
  vehicle_id: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ example: 18500.00 })
  total: number;
}

export class UpdateSaleDto extends PartialType(CreateSaleDto) {}