import { FastifyRequest } from "fastify"

export type ReachByStateRequest = FastifyRequest<{
  Params: {
    state: string
  }
}>

export type ReachRequest = FastifyRequest<{
  Params: {
    id: number
  }
}>
