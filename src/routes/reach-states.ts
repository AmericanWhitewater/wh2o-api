import { pgClient, DataTypes } from '../config'
const ReachStates = require('../models/reaches_states')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/reach-states', (req, res) => {
    ReachStates.findAll({
      limit: 10
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
