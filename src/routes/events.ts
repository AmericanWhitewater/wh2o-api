import { pgClient, DataTypes } from "../config";
const Event = require('../models/events')(pgClient, DataTypes)

module.exports = app => {
  app.get('/event', (req, res) => {

    Event.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send(result).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/event-state', (req, res) => {

    Event.findAll({
      where: {
        state: req.query.state
      }
    }).then(result => {
      res.send(result).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-event', (req, res) => {

    Event.create(req.body).then(() => {
      res.send('Event Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-event', (req, res) => {

    Event.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Event updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-event', (req, res) => {

    Event.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Event Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}