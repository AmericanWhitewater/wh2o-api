const { pgClient, DataTypes } = require('../config')
const GISState = require('../models/gis_states')(pgClient, DataTypes)

module.exports = app => {
  app.get('/gis-states', (req, res) => {

    GISState.findOne({
      where: {
        gid: req.query.gid
      }
    }).then(result => {
      res.send(result).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/gis-states-country', (req, res) => {

    GISState.findAll({
      where: {
        fips_cntry: req.query.country
      }
    }).then(result => {
      res.send(result).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-gis-state', (req, res) => {

    GISState.create(req.body).then(() => {
      res.send('GISState Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-gis-state', (req, res) => {

    GISState.update(req.body, {
      where: {
        gid: req.query.gid
      }
    }).then(() => {
      res.send('GISState updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-gis-state', (req, res) => {

    GISState.destroy({
      where: {
        gid: req.query.gid
      }
    }).then(() => {
      res.send('GIS Zip Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}