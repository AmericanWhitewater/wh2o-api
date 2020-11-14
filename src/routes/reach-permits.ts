import { pgClient, DataTypes } from '../config'
const ReachPermits = require('../models/reaches_permits')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/reach-permits', (req, res) => {
    ReachPermits.findAll({
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
