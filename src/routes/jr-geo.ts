import { pgClient, DataTypes } from '../config'
const JRGeo = require('../models/jrgeo')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/jr-geo', (req, res) => {
    JRGeo.findAll({
      limit: 5
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
