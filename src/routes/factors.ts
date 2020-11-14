import { pgClient, DataTypes } from '../config'
const Factors = require('../models/factors')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/factors', (req, res) => {
    Factors.findAll({
      limit: 20
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
