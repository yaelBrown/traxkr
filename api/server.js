const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})



// Start Server 
const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()