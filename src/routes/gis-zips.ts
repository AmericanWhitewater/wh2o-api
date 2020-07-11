import { pgClient, DataTypes } from "../config";
const GISZip = require('../models/gis_zips')(pgClient, DataTypes)

module.exports = app => {
  app.get('/gis-zip', (req, res) => {

    GISZip.findOne({
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

  app.get('/gis-zip-state', (req, res) => {

    GISZip.findAll({
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

  app.post('/new-gis-zip', (req, res) => {

    GISZip.create(req.body).then(() => {
      res.send('GISZip Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-gis-zip', (req, res) => {

    GISZip.update(req.body, {
      where: {
        gid: req.query.gid
      }
    }).then(() => {
      res.send('GISZip updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-gis-zip', (req, res) => {

    GISZip.destroy({
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