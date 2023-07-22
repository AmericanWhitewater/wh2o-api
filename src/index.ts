import { config } from "dotenv";
import fastify from "fastify";
import routes from "./routes/routes";

config();

const server = fastify({ logger: true });

server.register(routes);
server.get("/", async () => {
  return "wh2o-api";
});

const start = async () => {
  try {
    await server.listen({
      port: 3000,
      host: "localhost",
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
