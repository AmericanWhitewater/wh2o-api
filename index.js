require('dotenv').config()
const app = require('express')()
const port = process.env.PORT || 8000
const bodyParser = require("body-parser");

const routes = require('./routes') 

app.use(bodyParser.urlencoded({ extended: false }))

routes(app)

app.get('/', (req, res) => {
  res.send('wh2o-api').status(200)
})

app.get('/ping', (req, res) => {
  res.send({message: 'pong'})
})

app.listen(port, () => {
  console.log(`wh2o-api listening on http://localhost:${port}`)
})