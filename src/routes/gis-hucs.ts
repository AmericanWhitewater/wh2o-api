import { pgClient, DataTypes } from "../config";
const GISHuc = require('../models/gis_hucs')(pgClient, DataTypes)

module.exports = app => {
  app.get('/gis-huc', (req, res) => {

    GISHuc.findOne({
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

  app.post('/new-gis-huc', (req, res) => {

    GISHuc.create(req.body).then(() => {
      res.send('GISHuc Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-gis-huc', (req, res) => {

    GISHuc.update(req.body, {
      where: {
        gid: req.query.gid
      }
    }).then(() => {
      res.send('GISHuc updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-gis-huc', (req, res) => {

    GISHuc.destroy({
      where: {
        gid: req.query.gid
      }
    }).then(() => {
      res.send('GIS Huc Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}