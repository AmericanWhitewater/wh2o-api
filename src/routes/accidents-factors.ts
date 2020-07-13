import { pgClient, DataTypes } from '../config'
const AccidentFactor = require('../models/accidents_factors')(
  pgClient,
  DataTypes
)

module.exports = (app) => {
  app.get('/accident-factors', (req, res) => {
    AccidentFactor.findAll({
      where: {
        accident_id: req.query.accident_id,
      },
    })
      .then((result) => {
        const data = result.map((factor) => factor.dataValues.factor_id)

        res.send(data).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.post('/new-accident-factor', (req, res) => {
    AccidentFactor.create(req.body)
      .then(() => {
        res.send('AccidentFactor Created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-accident-factor', (req, res) => {
    AccidentFactor.update(req.body, {
      where: {
        accident_id: req.query.accident_id,
      },
    })
      .then(() => {
        res.send('AccidentFactor updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-accident-factor', (req, res) => {
    AccidentFactor.destroy({
      where: {
        accident_id: req.query.accident_id,
      },
    })
      .then(() => {
        res.send('AccidentFactor Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })
}
