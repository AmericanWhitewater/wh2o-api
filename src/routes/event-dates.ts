import { pgClient, DataTypes } from '../config'
const EventDates = require('../models/event_dates')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/event-dates', (req, res) => {
    EventDates.findAll({
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
