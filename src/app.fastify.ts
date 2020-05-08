import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import * as fastify from 'fastify';

function setupSwagger(app: INestApplication) {
    // create swagger
    const options = new DocumentBuilder()
        .setTitle('API')
        .setVersion('0.0.1')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
}

export async function bootstrap() {
    const serverOptions: fastify.ServerOptionsAsHttp = { logger: true };
    const instance: fastify.FastifyInstance = fastify(serverOptions);
    const nestApp = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(instance),
    );

    const isLocal = process.env.NODE_ENV === 'local';
    if (isLocal) {
        setupSwagger(nestApp);
    }

    nestApp.enableCors();
    await nestApp.init();
    return instance;
}
