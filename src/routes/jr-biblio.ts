import { pgClient, DataTypes } from '../config'
const JRBiblio = require('../models/jrbiblio')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/jr-biblio', (req, res) => {
    JRBiblio.findAll({
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
