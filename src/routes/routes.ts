import { FastifyInstance, FastifyError } from "fastify";
import reach from "./reach/reach";

const routes = (
  fastify: FastifyInstance,
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void,
): void => {
  fastify.register(reach);
  done();
};

export default routes;
