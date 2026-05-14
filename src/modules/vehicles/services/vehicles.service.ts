import { Injectable, InternalServerErrorException } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import { Vehicles } from '../entities/vehicle.entity'; 

@Injectable()
export class VehiclesService {

  constructor(
    @InjectRepository(Vehicles)
    private readonly vehicleRepository: Repository<Vehicles>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    try {
      
      const vehicle = this.vehicleRepository.create(createVehicleDto);
      
      
      await this.vehicleRepository.save(vehicle);
      
      return vehicle;
    } catch (error) {
      
      console.log(error);
      
      
      throw new InternalServerErrorException('Error al crear el vehículo');
    }
  }

  async findAll() {
    try {
      return await this.vehicleRepository.find();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al obtener la lista de vehículos');
    }
  }
}

