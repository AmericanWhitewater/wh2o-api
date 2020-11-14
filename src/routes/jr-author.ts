import { pgClient, DataTypes } from '../config'
const JRAuthor = require('../models/jrauthor')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/jr-author', (req, res) => {
    JRAuthor.findAll({
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
