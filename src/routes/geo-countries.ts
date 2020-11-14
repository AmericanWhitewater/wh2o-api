import { pgClient, DataTypes } from '../config'
const GeoCountries = require('../models/geo_countries')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/geo-countries', (req, res) => {
    GeoCountries.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
