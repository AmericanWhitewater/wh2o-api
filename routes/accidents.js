const { pgClient, DataTypes } = require('../config')
const Accident = require('../models/accidents')(pgClient, DataTypes)

module.exports = app => {
  app.get('/accident', (req, res) => {

    Accident.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send({ Accident: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-accident', (req, res) => {

    Accident.create(req.body).then(() => {
      res.send('Accident Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-accident', (req, res) => {

    Accident.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Accident updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-accident', (req, res) => {

    Accident.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Accident Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}