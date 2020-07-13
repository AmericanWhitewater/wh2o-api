import { pgClient, DataTypes } from '../config'
const Reach = require('../models/reaches')(pgClient, DataTypes)

module.exports = app => {
  app.get('/reach', (req, res) => {

    Reach.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send({ reach: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-reach', (req, res) => {

    Reach.create(req.body).then(() => {
      res.send('Reach Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-reach', (req, res) => {

    Reach.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Reach Updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-reach', (req, res) => {

    Reach.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Reach Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}
