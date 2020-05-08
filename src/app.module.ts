import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config';

import { MysqlConfigService } from '@core/mysql-config.service';
import { SharedModule } from '@shared/shared.module';

import { DummyModule } from '@modules/dummy/dummy.module';

const API_MODULES = [
    DummyModule,
];

@Module({
    imports: [
        ConfigModule.forRoot({ load: [config] }),
        TypeOrmModule.forRootAsync({
            useClass: MysqlConfigService
        }),
        SharedModule,
        ...API_MODULES,
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
