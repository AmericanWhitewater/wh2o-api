import {
  FastifyInstance,
  FastifyError,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import http from "../../http";
import { gqlQueries } from "./gql-queries";

const reach = (
  fastify: FastifyInstance,
  // @ts-ignore
  opts: unknown,
  done: (err?: FastifyError) => void,
): void => {
  const getFeatures = async (request: FastifyRequest, reply: FastifyReply) => {
    //
    // we should do all the default sorting and filtering here
    //
    // @ts-ignore
    const { reachId } = request.params;
    const result = await http.post("/graphql", {
      body: gqlQueries.getReachFeatures(reachId),
    });

    reply.send(result);
  };
  const getAllByState = async (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    // @ts-ignore
    const { state } = request.params;
    const response = await http.get(
      `/content/River/search/.json?state=st${state}`,
    );
    reply.send(response);
  };

  const getPosts = async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { reachId } = request.params;
    console.log("get posts for reachId", reachId);
    // const result = await http.post("/graphql", {
    //   body: gqlQueries.getReachPosts(reachId),
    // });
    reply.send([]);
  };

  const getEvents = async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { reachId } = request.params;
    console.log("get events for reachId", reachId);
    // const result = await http.post("/graphql", {
    //   body: gqlQueries.getReachEvents(reachId),
    // });
    reply.send([]);
  };

  const getRevisions = async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { reachId } = request.params;
    console.log("get revisions for reachId", reachId);
    // const result = await http.post("/graphql", {
    //   body: gqlQueries.getReachEvents(reachId),
    // });
    reply.send([]);
  };

  const getArticles = async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { reachId } = request.params;
    console.log("get articles for reachId", reachId);
    // const result = await http.post("/graphql", {
    //   body: gqlQueries.getReachEvents(reachId),
    // });
    reply.send([]);
  };

  const updateReach = async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { reachId } = request.params;
    console.log("update reachId", reachId);

    reply.send({});
  };

  const deleteReach = async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { reachId } = request.params;
    console.log("delete reachId", reachId);

    reply.send({});
  };

  fastify.get("/reach/state/:state", getAllByState);
  fastify.get("/reach/:reachId/features", getFeatures);
  fastify.get("/reach/:reachId/posts", getPosts);
  fastify.get("/reach/:reachId/events", getEvents);
  fastify.get("/reach/:reachId/revisions", getRevisions);
  fastify.get("/reach/:reachId/articles", getArticles);
  fastify.patch("/reach/:reachId", updateReach);
  fastify.delete("/reach/:reachId", deleteReach);
  done();
};

export default reach;
