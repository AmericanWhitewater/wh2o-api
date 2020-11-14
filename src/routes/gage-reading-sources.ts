import { pgClient, DataTypes } from '../config'
const GageReadingSources = require('../models/gauge_reading_sources')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-reading-sources', (req, res) => {
    GageReadingSources.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
