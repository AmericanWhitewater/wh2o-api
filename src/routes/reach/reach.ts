import { FastifyInstance, FastifyError, FastifyReply } from "fastify"

import http from "../../http"
import {
  getReachByStateSchema,
  getReachFeaturesSchema,
  getReachGagesSchema,
  getReachSchema,
} from "./schemas"
import { ReachByStateRequest, ReachRequest } from "./types"

const reach = (
  fastify: FastifyInstance,
  // NOTE: disabling eslint on the `opts` param because it's not used
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void,
) => {
  const getReach = async (request: ReachRequest, reply: FastifyReply) => {
    const { reachId } = request.params

    const result = await fastify.prisma.reach.findUnique({
      where: {
        id: Number(reachId),
      },
    })
    reply.send(result)
  }
  const getFeatures = async (request: ReachRequest, reply: FastifyReply) => {
    // TODO: default sorting and filtering here
    const { reachId } = request.params

    const result = await fastify.prisma.feature.findMany({
      where: {
        reachId: Number(reachId),
      },
    })
    reply.send(result)
  }
  const getAllByState = async (
    request: ReachByStateRequest,
    reply: FastifyReply,
  ) => {
    const { state } = request.params
    const response = await http.get(
      `/content/River/search/.json?state=st${state}`,
    )

    reply.send(response.data)
  }

  const getGages = async (request: ReachRequest, reply: FastifyReply) => {
    const { reachId } = request.params

    const result = await fastify.prisma.gage.findMany({
      where: {
        reachId: Number(reachId),
      },
    })
    console.log(result)
    reply.send(result)
  }

  fastify.get("/reach/state/:state", getReachByStateSchema, getAllByState)
  fastify.get("/reach/:reachId/feature", getReachFeaturesSchema, getFeatures)
  fastify.get("/reach/:reachId/gage", getReachGagesSchema, getGages)
  fastify.get("/reach/:reachId", getReachSchema, getReach)
  done()
}

export default reach
