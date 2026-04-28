import { Body, Controller, Get, Post } from '@nestjs/common'; 
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleDto } from '../dto/vehicle.dto';

@Controller('vehicles')
export class VehiclesController {

  // Aquí inyectamos el servicio para poder usar sus funciones
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get() 
  getVehiclesAll() { 
      return 'Lista de vehiculos';
  }

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
      // Ahora enviamos los datos del Body al servicio
      return this.vehiclesService.create(createVehicleDto);
  }
}