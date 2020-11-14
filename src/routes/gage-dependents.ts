import { pgClient, DataTypes } from '../config'
const GageDependents = require('../models/gauge_dependents')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-dependents', (req, res) => {
    GageDependents.findAll({
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
