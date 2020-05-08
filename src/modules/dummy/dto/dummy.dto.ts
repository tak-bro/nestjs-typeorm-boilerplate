import { ApiProperty } from '@nestjs/swagger';

import { DummyEntity } from '@entities/dummy.entity';

export class DummyDto {

    @ApiProperty()
    readonly dummyId: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly age?: number;

    @ApiProperty()
    readonly createdAt: Date;

    @ApiProperty()
    readonly updatedAt: Date;

    constructor(dummy: DummyEntity) {
        this.dummyId = dummy.dummyId;
        this.name = dummy.name;
        this.age = dummy.age;
        this.createdAt = dummy.createdAt;
        this.updatedAt = dummy.updatedAt;
    }
}
