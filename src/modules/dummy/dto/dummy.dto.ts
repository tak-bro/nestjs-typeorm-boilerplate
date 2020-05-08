import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { DummyEntity } from '@entities/dummy.entity';

export class DummyDto {

    @ApiProperty()
    @IsString()
    readonly dummyId: string;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly age?: number;

    @ApiProperty()
    @IsDate()
    readonly createdAt: Date;

    @ApiProperty()
    @IsDate()
    readonly updatedAt: Date;

    constructor(dummy: DummyEntity) {
        this.dummyId = dummy.dummyId;
        this.name = dummy.name;
        this.age = dummy.age;
        this.createdAt = dummy.createdAt;
        this.updatedAt = dummy.updatedAt;
    }
}
