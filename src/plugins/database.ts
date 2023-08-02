import fp from "fastify-plugin"
import { PrismaClient } from "@prisma/client"
import { FastifyInstance } from "fastify"

// TODO: Type this properly
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default fp(async (fastify: FastifyInstance, options: unknown, done) => {
  if (!fastify.prisma) {
    const prisma = new PrismaClient()
    fastify.decorate("prisma", prisma)

    fastify.addHook("onClose", async (fastify, done) => {
      if (fastify.prisma === prisma) {
        try {
          await fastify.prisma.$disconnect()
          done()
        } catch (e) {
          console.error(e)
          await fastify.prisma.$disconnect()
          process.exit(1)
        }
      }
    })
  }

  done()
})
