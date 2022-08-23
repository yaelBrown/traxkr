const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/test', async (req, reply) => { 
  return { msg: "ok" } 
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