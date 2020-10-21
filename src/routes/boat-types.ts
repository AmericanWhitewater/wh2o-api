import { pgClient, DataTypes } from '../config'
const BoatType = require('../models/sfboattypes')(pgClient, DataTypes)

module.exports = app => {
  app.get('/boat-types', (req, res) => {
    BoatType.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
