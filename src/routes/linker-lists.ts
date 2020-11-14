import { pgClient, DataTypes } from '../config'
const LinkerLists = require('../models/linker_lists')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/linker-lists', (req, res) => {
    LinkerLists.findAll({
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
