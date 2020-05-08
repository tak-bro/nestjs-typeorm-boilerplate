import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConnectionManager, getConnectionManager } from 'typeorm';

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {

    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        const connectionManager: ConnectionManager = getConnectionManager();
        let options: TypeOrmModuleOptions;

        if (connectionManager.has('default')) {
            options = connectionManager.get('default').options;
            await connectionManager.get('default').close();
        } else {
            options = {
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                port: parseInt(process.env.MYSQL_PORT, 10),
                entities: [__dirname + '/../entities/**.entity{.ts,.js}'],
                synchronize: true,
            };
        }
        return options;
    }
}
