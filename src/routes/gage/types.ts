import { FastifyRequest } from "fastify"
import { Gage } from "@prisma/client"

export type GageRequest = FastifyRequest<{
  Params: {
    id: number
  }
}>

export type GageCreateUpdateRequest = FastifyRequest<{
  Params: {
    id: number
  }
  Body: Gage
}>
