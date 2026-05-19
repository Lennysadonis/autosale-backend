import { ApiProperty, PartialType } from '@nestjs/swagger';
import { 
  IsInt, 
  IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsPositive, 
  IsString, 
  MinLength 
} from 'class-validator';

export class CreateVehicleDto {
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  model_id: number; 

  @IsString()
  @MinLength(3)
  @ApiProperty()
  vin: string;

  @IsInt()
  @IsNumber()
  @IsPositive()
  @IsOptional() 
  @ApiProperty()
  year: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  color: string;

  
  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  mileage: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  status: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}