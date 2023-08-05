import { FastifyRequest } from "fastify"
import { Post } from "@prisma/client"

export type PostRequest = FastifyRequest<{
  Params: {
    id: number
  }
}>

export type PostCreateUpdateRequest = FastifyRequest<{
  Params: {
    id: number
  }
  Body: Post
}>
