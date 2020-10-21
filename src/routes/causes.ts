import { pgClient, DataTypes } from '../config'
const Causes = require('../models/causes')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/causes', (req, res) => {
    Causes.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
