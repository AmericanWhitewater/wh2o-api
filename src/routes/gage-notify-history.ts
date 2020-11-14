import { pgClient, DataTypes } from '../config'
const GageNotifyHistory = require('../models/gauge_notify_history')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-notify-history', (req, res) => {
    GageNotifyHistory.findAll({
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
