import { pgClient, DataTypes } from '../config'
const ReachMap = require('../models/reach_map')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/reach-map', (req, res) => {
    ReachMap.findAll({
      limit: 2
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
