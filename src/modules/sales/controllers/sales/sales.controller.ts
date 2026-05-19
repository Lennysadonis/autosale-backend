import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesService } from '../../services/sales/sales.service';
import { CreateSaleDto } from '../../dto/sale.dto'; 

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }
}