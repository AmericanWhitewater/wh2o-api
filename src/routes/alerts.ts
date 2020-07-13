import { pgClient, DataTypes } from '../config'
const Alert = require('../models/awalerts')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/alert', (req, res) => {
    Alert.findOne({
      where: {
        articleid: req.query.articleid,
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

  app.post('/new-alert', (req, res) => {
    Alert.create(req.body)
      .then(() => {
        res.send('Alert Created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-alert', (req, res) => {
    Alert.update(req.body, {
      where: {
        articleid: req.query.articleid,
      },
    })
      .then(() => {
        res.send('Alert updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-Alert', (req, res) => {
    Alert.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('Alert Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })
}
