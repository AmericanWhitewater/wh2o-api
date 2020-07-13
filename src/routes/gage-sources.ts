import { pgClient, DataTypes } from '../config'
const GageSource = require('../models/gauge_sources')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-sources', (req, res) => {
    GageSource.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.post('/new-gage-source', (req, res) => {
    GageSource.create(req.body)
      .then(() => {
        res.send('Gage source created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-gage-source', (req, res) => {
    GageSource.update(req.body, {
      where: {
        source: req.query.source,
      },
    })
      .then(() => {
        res.send('Gage source updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-gage-source', (req, res) => {
    GageSource.destroy({
      where: {
        source: req.query.source,
      },
    })
      .then(() => {
        res.send('Gage source deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })
}
