import { bootstrap as fastify } from './app.fastify';

async function startFastify() {
    const fastifyInstance = await fastify();
    fastifyInstance.listen(3000);
}

startFastify();
