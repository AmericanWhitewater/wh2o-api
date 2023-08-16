import fp from "fastify-plugin"
import { FastifyInstance } from "fastify"

import prisma from "./client"
import logger from "../../lib/logger"

// TODO: Type this properly
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default fp(async (fastify: FastifyInstance, options: unknown, done) => {
  if (!fastify.prisma) {
    fastify.decorate("prisma", prisma)

    fastify.addHook("onClose", async (fastify, done) => {
      if (fastify.prisma === prisma) {
        try {
          await fastify.prisma.$disconnect()
          done()
        } catch (e) {
          logger.error(e)
          await fastify.prisma.$disconnect()
          process.exit(1)
        }
      }
    })
  }

  done()
})
