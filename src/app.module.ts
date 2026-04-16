import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './modules/vehicles/vehicles.module';

@Module({
  imports: [
    // 1. Cargamos el ConfigModule primero para que las variables estén listas
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    
    // 2. Configuración de TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER, // Corregido: antes decía DB_USERNAME
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Recomendado: carga las entidades de tus módulos automáticamente
      synchronize: true,      // Esto creará las tablas en pgAdmin por ti
    }),

    VehiclesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}