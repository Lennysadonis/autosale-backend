import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesController } from './controllers/vehicles.controller';
import { Vehicles } from './entities/vehicle.entity'; 

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Vehicles]) 
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [TypeOrmModule, VehiclesService],
})
export class VehiclesModule {}