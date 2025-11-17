const fastify = require('fastify')({ logger: true });
fastify.get('/', async (request, reply) => { return { hello: 'world' }; });
fastify.listen({ port: 3001 }, err => { if (err) throw err; });