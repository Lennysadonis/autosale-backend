import { Body, Controller, Post } from '@nestjs/common';
import { ModelsService } from '../services/models.service';
import { CreateModelDto } from '../dto/model.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Models')
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Post()
  create(@Body() createVehicleModelDto: CreateModelDto) {
    return this.modelsService.create(createVehicleModelDto);
  }
}