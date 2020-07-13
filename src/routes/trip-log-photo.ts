import { pgClient, DataTypes } from '../config'
const TripLogPhoto = require('../models/triplog_photos')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/trip-log-photos', (req, res) => {
    TripLogPhoto.findAll({
      where: {
        triplog_id: req.query.triplog_id,
      },
    })
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.post('/new-trip-log-photo', (req, res) => {
    TripLogPhoto.create(req.body)
      .then(() => {
        res.send('TripLogPhoto Created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-trip-log-photo', (req, res) => {
    TripLogPhoto.update(req.body, {
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('TripLogPhoto updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-trip-log-photo', (req, res) => {
    TripLogPhoto.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('TripLogPhoto Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })
}
