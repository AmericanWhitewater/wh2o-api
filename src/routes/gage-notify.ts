import { pgClient, DataTypes } from '../config'
const GageNotify = require('../models/gauge_notify')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-notify', (req, res) => {
    GageNotify.findAll({
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
