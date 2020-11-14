import { pgClient, DataTypes } from '../config'
const GeoHucs = require('../models/geo_hucs')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/geo-hucs', (req, res) => {
    GeoHucs.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
