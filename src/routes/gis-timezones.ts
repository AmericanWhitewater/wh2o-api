import { pgClient, DataTypes } from '../config'
const GISTimezones = require('../models/gis_timezones')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gis-timezones', (req, res) => {
    GISTimezones.findAll({
      limit: 1
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
