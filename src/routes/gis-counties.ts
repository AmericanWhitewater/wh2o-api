import { pgClient, DataTypes } from '../config'
const GISCounties = require('../models/gis_counties')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gis-counties', (req, res) => {
    GISCounties.findAll({
      limit: 20
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
