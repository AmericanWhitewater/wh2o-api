import { pgClient, DataTypes } from '../config'
const GeoRegions = require('../models/geo_regions')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/geo-regions', (req, res) => {
    GeoRegions.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
