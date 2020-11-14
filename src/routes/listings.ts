import { pgClient, DataTypes } from '../config'
const Listings = require('../models/listings')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/listings', (req, res) => {
    Listings.findAll({
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
