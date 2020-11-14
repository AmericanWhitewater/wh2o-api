import { pgClient, DataTypes } from '../config'
const Journal = require('../models/journal')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/journal', (req, res) => {
    Journal.findAll({
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
