import { pgClient, DataTypes } from '../config'
const EventNotify = require('../models/event_notify')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/event-notify', (req, res) => {
    EventNotify.findAll({
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
