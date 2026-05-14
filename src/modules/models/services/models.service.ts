import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleModel } from '../entities/vehicle-model.entity';
import { Repository } from 'typeorm';
// Esta línea es la que genera el conflicto si el nombre no coincide
import { CreateModelDto } from '../dto/model.dto'; 

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(VehicleModel)
    private readonly vehicleModelRepository: Repository<VehicleModel>,
  ) {}

  async create(createVehicleModelDto: CreateModelDto) {
    const model = this.vehicleModelRepository.create(createVehicleModelDto);
    return await this.vehicleModelRepository.save(model);
  }
}