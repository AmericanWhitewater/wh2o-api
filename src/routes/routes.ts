import { type FastifyInstance, type FastifyError } from "fastify"

import reach from "./reach/reach"
import post from "./post/post"

const routes = (
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void,
): void => {
  fastify.register(reach)
  fastify.register(post)
  done()
}

export default routes
