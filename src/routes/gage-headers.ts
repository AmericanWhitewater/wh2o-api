import { pgClient, DataTypes } from '../config'
const GageHeader = require('../models/gauge_headers')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-headers', (req, res) => {
    GageHeader.findAll({
      limit: 100
    })
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.get('/gage-detail', (req, res) => {
    GageHeader.findOne({
      where: {
        id: req.query.id,
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

  app.post('/new-gage-header', (req, res) => {
    GageHeader.create(req.body)
      .then(() => {
        res.send('Gage headers Created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-gage-headers', (req, res) => {
    GageHeader.update(req.body, {
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('Gage headers record successfully updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-gage-headers', (req, res) => {
    GageHeader.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('header Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })
}
