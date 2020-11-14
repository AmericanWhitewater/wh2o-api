import { pgClient, DataTypes } from '../config'
const GageDependentHeaders = require('../models/gauge_dependent_headers')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-dependent-headers', (req, res) => {
    GageDependentHeaders.findAll({
      limit: 2
    })
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
