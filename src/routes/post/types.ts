import { FastifyRequest } from "fastify"

export type PostRequest = FastifyRequest<{
  Params: {
    id: number
  }
}>
