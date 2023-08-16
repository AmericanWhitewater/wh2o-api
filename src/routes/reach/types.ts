import { FastifyRequest } from "fastify"
import { Reach } from "@prisma/client"

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

export type ReachUpdateRequest = FastifyRequest<{
  Params: {
    id: number
  }
  Body: Reach
}>
