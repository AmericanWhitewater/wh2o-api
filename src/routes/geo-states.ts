import { pgClient, DataTypes } from '../config'
const GeoStates = require('../models/geo_states')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/geo-states', (req, res) => {
    GeoStates.findAll({
      limit: 3
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
