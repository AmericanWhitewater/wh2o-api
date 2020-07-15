require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const middleware = require('./middleware')
const routes = require('./routes')
const authMiddleware = require('./middleware/authentication')
const helmet = require("helmet");
const cors = require("cors")

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions))
app.use(helmet())

app.use(authMiddleware)
app.use(bodyParser.urlencoded({ extended: false }))

middleware(app)
routes(app)

app.listen(port, () => {
  console.log(`wh2o-api listening on http://localhost:${port}`)
})
