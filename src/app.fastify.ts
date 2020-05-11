import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import * as fastify from 'fastify';

export async function bootstrap() {
    const serverOptions: fastify.ServerOptionsAsHttp = { logger: true };
    const instance: fastify.FastifyInstance = fastify(serverOptions);
    const nestApp = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(instance),
    );

    nestApp.enableCors();
    await nestApp.init();
    return instance;
}
