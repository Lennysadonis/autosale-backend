import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: 'Juan Pérez' })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'juan.perez@example.com' })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '+505 8888-8888', required: false })
  phone?: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}