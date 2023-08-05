import { FastifyInstance, FastifyError, FastifyReply } from "fastify"

import {
  getReachByStateSchema,
  getReachFeaturesSchema,
  getReachGagesSchema,
  getReachSchema,
} from "./schemas"
import { ReachByStateRequest, ReachRequest, ReachUpdateRequest } from "./types"
import { ReachService } from "../../service/reach-service"

const reach = (
  fastify: FastifyInstance,
  // NOTE: disabling eslint on the `opts` param because it's not used
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void
) => {
  const reachService = new ReachService(fastify.prisma)

  const getReach = async (request: ReachRequest, reply: FastifyReply) => {
    try {
      const { id } = request.params

      const result = await reachService.getReach(Number(id))

      reply.send(result)
    } catch (err) {
      console.error(err)
      throw err
    }
  }
  const getFeatures = async (request: ReachRequest, reply: FastifyReply) => {
    try {
      // TODO: default sorting and filtering here
      const { id } = request.params

      // const reachService = new ReachService(fastify.prisma)
      const result = await reachService.getFeatures(Number(id))

      reply.send(result)
    } catch (err) {
      console.error(err)
      throw err
    }
  }
  const getAllByState = async (
    request: ReachByStateRequest,
    reply: FastifyReply
  ) => {
    try {
      const { state } = request.params

      // const reachService = new ReachService(fastify.prisma)
      const result = await reachService.getReachesByState(state)

      reply.send(result)
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  const getGages = async (request: ReachRequest, reply: FastifyReply) => {
    try {
      const { id } = request.params

      // const reachService = new ReachService(fastify.prisma)
      const result = await reachService.getGages(Number(id))

      reply.send(result)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  const deleteReach = async (request: ReachRequest, reply: FastifyReply) => {
    try {
      const { id } = request.params

      // const reachService = new ReachService(fastify.prisma)
      const result = await reachService.deleteReach(Number(id))

      reply.send(result)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  const updateReach = async (
    request: ReachUpdateRequest,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params
      const { body } = request

      // const reachService = new ReachService(fastify.prisma)
      const result = await reachService.updateReach(Number(id), body)

      reply.send(result)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  fastify.get("/reach/:id", getReachSchema, getReach)
  fastify.delete("/reach/:id", getReachSchema, deleteReach)
  fastify.put("/reach/:id", getReachSchema, updateReach)
  fastify.get("/reach/state/:state", getReachByStateSchema, getAllByState)
  fastify.get("/reach/:id/feature", getReachFeaturesSchema, getFeatures)
  fastify.get("/reach/:id/gage", getReachGagesSchema, getGages)
  done()
}

export default reach
