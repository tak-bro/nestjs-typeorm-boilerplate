import { DummyEntity } from '@entities/dummy.entity';

export class DummyDto {
    readonly dummyId: string;
    readonly name: string;
    readonly age?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(dummy: DummyEntity) {
        this.dummyId = dummy.dummyId;
        this.name = dummy.name;
        this.age = dummy.age;
        this.createdAt = dummy.createdAt;
        this.updatedAt = dummy.updatedAt;
    }
}
