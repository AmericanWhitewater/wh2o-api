import { pgClient, DataTypes } from '../config'
const LinkerSources = require('../models/linker_sources')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/linker-sources', (req, res) => {
    LinkerSources.findAll({
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
