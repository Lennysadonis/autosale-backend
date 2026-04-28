import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesController } from './controllers/vehicles.controller';
import { Vehicle } from './entities/vehicle.entity'; // Corregido: V mayúscula

@Module({
  imports: [
    // Registramos la entidad en el módulo para que el repositorio funcione
    TypeOrmModule.forFeature([Vehicle]) // Corregido: V mayúscula
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}