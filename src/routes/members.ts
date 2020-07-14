import { pgClient, DataTypes } from '../config'
const Member = require('../models/members')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/members', (req, res) => {

    Member.findAndCountAll({
      limit: 12,
      offset: 0
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
