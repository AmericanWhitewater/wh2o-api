const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/wh2o-api.Swagger20.json')

module.exports = app => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}