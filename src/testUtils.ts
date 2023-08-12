import request from "supertest"

import server from "./server"

export default {
  startServer: async function () {
    await server.ready()
    return server
  },
  stopServer: async function () {
    return server.close()
  },
  request: function () {
    return request(server.server)
  },
}
