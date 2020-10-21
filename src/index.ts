import dotenv from 'dotenv'
const result = dotenv.config()
if (result.error) {
  dotenv.config({ path: '.env.default' })
}
import express from 'express'
const app = express()
const middleware = require('./middleware')
const routes = require('./routes')
const helmet = require('helmet')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(helmet())

middleware(app)
routes(app)

export default app
