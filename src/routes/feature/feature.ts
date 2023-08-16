import { FastifyInstance, FastifyReply } from "fastify"

import { FeatureService } from "../../service/feature/feature.service"
import { FeatureCreateUpdateRequest, FeatureRequest } from "./types"
import schema from "./schema"
import logger from "../../lib/logger"
const feature = async (
  fastify: FastifyInstance,
  // NOTE: disabling eslint on the `opts` param because it's not used
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: Error) => void
) => {
  const featureService = new FeatureService(fastify.prisma)

  const getFeature = async (request: FeatureRequest, reply: FastifyReply) => {
    try {
      const { id } = request.params
      const result = await featureService.getFeature(Number(id))
      reply.send(result)
    } catch (err) {
      logger.error(err)
      throw err
    }
  }

  const updateFeature = async (
    request: FeatureCreateUpdateRequest,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params
      const feature = request.body
      const result = await featureService.updateFeature(Number(id), feature)
      reply.send(result)
    } catch (err) {
      logger.error(err)
      throw err
    }
  }

  const deleteFeature = async (
    request: FeatureRequest,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params
      const result = await featureService.deleteFeature(Number(id))
      reply.send(result)
    } catch (err) {
      logger.error(err)
      throw err
    }
  }

  fastify.get("/feature/:id", schema.getFeature, getFeature)
  fastify.put("/feature/:id", updateFeature)
  fastify.delete("/feature/:id", deleteFeature)
  done()
}

export default feature
