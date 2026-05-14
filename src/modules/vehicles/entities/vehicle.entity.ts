import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

@Entity('vehicles') // <-- Esto fuerza a que la tabla en pgAdmin se llame 'vehicles'
export class Vehicles { // <-- Cambiado a plural en la línea 11 como pediste

    @PrimaryGeneratedColumn('increment', { type: 'int4' })
    id: number;

    @Column({ type: 'int4' })
    model_id: number;

    @Column({ type: 'varchar', length: 50 })
    vin: string;

    @Column({ type: 'int4' })
    year: number;

    @Column({ type: 'varchar', length: 50 })
    color: string;

    @Column({ type: 'int4', default: 0 })
    milage: number;

    @Column({ type: 'float' })
    prece: number; 

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

}