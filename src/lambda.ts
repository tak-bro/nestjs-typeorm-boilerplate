import { Handler, Context, APIGatewayProxyResult } from 'aws-lambda';
import { proxy } from 'aws-serverless-fastify';
import * as fastify from 'fastify';

import { bootstrap } from './app.fastify';

let fastifyServer: fastify.FastifyInstance;

process.on('unhandledRejection', (reason) => {
    console.error(reason);
});

process.on('uncaughtException', (reason) => {
    console.error(reason);
});

export const handler: Handler = async (event: any, context: Context): Promise<APIGatewayProxyResult> => {
    if (!fastifyServer) {
        fastifyServer = await bootstrap();
    }
    return await proxy(fastifyServer, event, context);
};
