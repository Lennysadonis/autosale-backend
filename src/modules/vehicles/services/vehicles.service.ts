import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import { Vehicle } from '../entities/vehicle.entity'; // <-- Verifica que este nombre coincida con tu entidad

@Injectable()
export class VehiclesService {
  // 1. Inyectamos el repositorio de TypeORM para la tabla Vehicle
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  // 2. Volvemos la función asíncrona (async) porque guardar en BD toma tiempo
  async create(createVehicleDto: CreateVehicleDto) {
    console.log('Datos listos para guardar:', createVehicleDto);

    // 3. Preparamos el objeto para la base de datos
    const newVehicle = this.vehicleRepository.create(createVehicleDto);

    // 4. Lo guardamos en PostgreSQL
    await this.vehicleRepository.save(newVehicle);

    // 5. Devolvemos el vehículo guardado (ahora incluirá el ID autogenerado)
    return newVehicle;
  }

  findAll() {
    return 'Lista de vehiculos';
  }
}