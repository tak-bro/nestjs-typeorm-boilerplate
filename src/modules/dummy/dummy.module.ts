import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '@shared/shared.module';
import { DummyEntity } from '@entities/dummy.entity';

import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([DummyEntity]),
        SharedModule,
    ],
    controllers: [DummyController],
    providers: [DummyService],
    exports: [DummyService]
})
export class DummyModule {}
