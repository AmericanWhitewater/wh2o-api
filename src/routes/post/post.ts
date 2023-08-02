import { FastifyError, FastifyInstance, FastifyReply } from "fastify"

import { PostRequest } from "./types"

const post = (
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void,
): void => {
  const getPost = async (request: PostRequest, reply: FastifyReply) => {
    const { id } = request.params

    const result = await fastify.prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    })

    console.log("result", result)

    reply.send(result)
  }

  fastify.get("/post/:id", getPost)
  done()
}

export default post
