import { pgClient, DataTypes } from '../config'
const Layer = require('../models/layer')(pgClient, DataTypes)

module.exports = app => {
  app.get('/layer-all', (req, res) => {
    Layer.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.get('/layer', (req, res) => {

    Layer.findOne({
      where: {
        layer_id: req.query.layer_id
      }
    }).then(result => {
      res.send(result).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-layer', (req, res) => {

    Layer.create(req.body).then(() => {
      res.send('Layer Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-layer', (req, res) => {

    Layer.destroy({
      where: {
        layer_id: req.query.layer_id
      }
    }).then(() => {
      res.send('Layer Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}
