import { FastifyError, FastifyInstance, FastifyReply } from "fastify"

import { GageService } from "../../service/gage/gage.service"
import { GageCreateUpdateRequest, GageRequest } from "./types"
import schema from "./schema"
const gage = async (
  fastify: FastifyInstance,
  // NOTE: disabling eslint on the `opts` param because it's not used
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void
) => {
  const gageService = new GageService(fastify.prisma)

  const getGage = async (request: GageRequest, reply: FastifyReply) => {
    const { id } = request.params

    const result = await gageService.getGage(Number(id))

    reply.send(result)
  }

  const updateGage = async (
    request: GageCreateUpdateRequest,
    reply: FastifyReply
  ) => {
    const { id } = request.params
    const gage = request.body

    const result = await gageService.updateGage(Number(id), gage)

    reply.send(result)
  }

  const deleteGage = async (request: GageRequest, reply: FastifyReply) => {
    const { id } = request.params

    const result = await gageService.deleteGage(Number(id))

    reply.send(result)
  }

  const createGage = async (
    request: GageCreateUpdateRequest,
    reply: FastifyReply
  ) => {
    const gage = request.body

    const result = await gageService.createGage(gage)

    reply.send(result)
  }

  fastify.get("/gage/:id", schema.getGageSchema, getGage)
  fastify.put("/gage/:id", schema.updateGageSchema, updateGage)
  fastify.delete("/gage/:id", schema.deleteGageSchema, deleteGage)
  fastify.post("/gage", schema.createGageSchema, createGage)
  done()
}

export default gage
