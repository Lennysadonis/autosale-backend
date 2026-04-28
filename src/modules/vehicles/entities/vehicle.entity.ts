import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

@Entity()
export class Vehicle { // <--- Corregido: 'V' mayúscula para que el Servicio lo reconozca

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
    milage: number; // Mantenemos tu nombre de columna de pgAdmin

    @Column({ type: 'float' })
    prece: number; // Mantenemos tu nombre de columna de pgAdmin

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

}