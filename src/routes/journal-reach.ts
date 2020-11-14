import { pgClient, DataTypes } from '../config'
const JournalReach = require('../models/journal_reach')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/journal-reach', (req, res) => {
    JournalReach.findAll({
      limit: 20
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
