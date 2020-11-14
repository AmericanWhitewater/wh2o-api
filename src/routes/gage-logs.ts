import { pgClient, DataTypes } from '../config'
const GageLogs = require('../models/gauge_logs')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-logs', (req, res) => {
    GageLogs.findAll({
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
