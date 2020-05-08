import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Dummy')
export class DummyEntity {

    @PrimaryGeneratedColumn('uuid')
    dummyId: string;

    @Column('varchar', { length: 10 })
    name: string;

    @Column('int', { unsigned: true, nullable: true })
    age?: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
