import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesController } from './controllers/vehicles.controller';
import { Vehicles } from './entities/vehicle.entity'; // Importación en plural

@Module({
  imports: [
    // Registramos la entidad con el nuevo nombre plural
    TypeOrmModule.forFeature([Vehicles]) 
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [TypeOrmModule, VehiclesService],
})
export class VehiclesModule {}