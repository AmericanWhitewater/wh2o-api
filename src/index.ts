import { config } from "dotenv"

import server from "./server"

// Load environment variables from .env file
config()

const start = async () => {
  try {
    await server.listen({
      port: 3000,
      host: "localhost",
    })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
