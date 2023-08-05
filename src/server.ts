import fastify from "fastify"
import * as path from "path"
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"

import databasePlugin from "./plugins/database"
import routes from "./routes/routes"

// Instantiate Fastify with some config
const server = fastify({ logger: true })

server.register(databasePlugin)
server.register(routes)
server.get("/", async () => {
  return "wh2o-api"
})

if (process.env.NODE_ENV !== "production") {
  server.register(fastifySwagger, {
    mode: "static",
    specification: {
      path: path.resolve(__dirname, "./openapi/wh2o-api.yaml"),
      baseDir: path.resolve(__dirname, "./openapi"),
    },
  })
  server.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  })
}

export default server
