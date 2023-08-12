import { FastifyError, FastifyInstance, FastifyReply } from "fastify"

import { PostCreateUpdateRequest, PostRequest } from "./types"
import { PostService } from "../../service/post/post.service"

const post = (
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void
): void => {
  const postService = new PostService(fastify.prisma)

  const getPost = async (request: PostRequest, reply: FastifyReply) => {
    const { id } = request.params

    const result = await postService.getPost(Number(id))

    reply.send(result)
  }
  const updatePost = async (
    request: PostCreateUpdateRequest,
    reply: FastifyReply
  ) => {
    const { id } = request.params
    const post = request.body

    const result = await postService.updatePost(Number(id), post)

    reply.send(result)
  }

  const deletePost = async (request: PostRequest, reply: FastifyReply) => {
    const { id } = request.params

    const result = await postService.deletePost(Number(id))

    reply.send(result)
  }

  const createPost = async (
    request: PostCreateUpdateRequest,
    reply: FastifyReply
  ) => {
    const post = request.body

    const result = await postService.createPost(post)

    reply.send(result)
  }

  fastify.get("/post/:id", getPost)
  fastify.put("/post/:id", updatePost)
  fastify.delete("/post/:id", deletePost)
  fastify.post("/post", createPost)
  done()
}

export default post
