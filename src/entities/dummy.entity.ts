import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@Entity('Dummy')
export class DummyEntity {

    @IsString()
    @PrimaryGeneratedColumn('uuid')
    dummyId: string;

    @IsString()
    @Column('varchar', { length: 10 })
    name: string;

    @IsOptional()
    @IsNumber()
    @Column('int', { unsigned: true, nullable: true })
    age?: number;

    @IsDate()
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @IsDate()
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
