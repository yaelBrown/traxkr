import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from 'fastify-mongodb'

const dbConn = async (fastify, options) {
  fastify.register(fastifyMongo, {
    
  })
}

module.exports = fastifyPlugin(dbConn)