import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../../entities/sale.entity';
import { CreateSaleDto } from '../../dto/sale.dto';
import { Vehicle } from '../../../vehicles/entities/vehicle.entity';
import { Customer } from '../../../customers/entities/customer.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,

    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,

    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    
    const { customer_id, vehicle_id, total } = createSaleDto;

    
    const customer = await this.customerRepository.findOne({ where: { id: customer_id } });
    if (!customer) throw new NotFoundException(`Cliente con ID ${customer_id} no encontrado`);

    
    const vehicle = await this.vehicleRepository.findOne({ where: { id: vehicle_id } });
    if (!vehicle) throw new NotFoundException(`Vehículo con ID ${vehicle_id} no encontrado`);
    if (vehicle.status === 'sold') {
      throw new BadRequestException('Este vehículo ya ha sido vendido');
    }

    
    const sale = this.saleRepository.create({
      customer_id,
      vehicle_id,
      total,
    });
    const savedSale = await this.saleRepository.save(sale);

    
    vehicle.status = 'sold';
    await this.vehicleRepository.save(vehicle);

    return savedSale;
  }

  async findAll() {
    return await this.saleRepository.find();
  }
}