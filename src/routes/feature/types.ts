import { FastifyRequest } from "fastify"
import { Feature } from "@prisma/client"

export type FeatureRequest = FastifyRequest<{
  Params: {
    id: number
  }
}>

export type FeatureCreateUpdateRequest = FastifyRequest<{
  Params: {
    id: number
  }
  Body: Feature
}>
