require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require("body-parser");
const middleware = require("./middleware")
const routes = require('./routes') 

const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

app.use(express.static(pathToSwaggerUi))
app.use(bodyParser.urlencoded({ extended: false }))

middleware(app)
routes(app)

app.listen(port, () => {
  console.log(`wh2o-api listening on http://localhost:${port}`)
})