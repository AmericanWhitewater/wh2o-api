import { pgClient, DataTypes } from '../config'
const GageMap = require('../models/gauge_map')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-map', (req, res) => {
    GageMap.findAll({
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
