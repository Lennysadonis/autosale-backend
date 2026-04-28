import { ApiProperty, PartialType } from '@nestjs/swagger';
import { 
  IsInt, 
  IsNumber, 
  IsOptional, 
  IsPositive, 
  IsString, 
  MinLength 
} from 'class-validator';

export class CreateVehicleDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number;

  @IsNumber() // Cambiado a number para model_id
  @IsPositive()
  @ApiProperty()
  model_id: number; // Antes era 'model'

  @IsString()
  @MinLength(3)
  @ApiProperty()
  vin: string;

  @IsNumber() 
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
  milage: number; // Corregido: sin la 'e' para coincidir con pgAdmin

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  prece: number; // Corregido: con 'e' final para coincidir con pgAdmin

  @IsString()
  @MinLength(3)
  @ApiProperty()
  status: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}