import { pgClient, DataTypes } from "../config";
const Project = require('../models/projects')(pgClient, DataTypes)

module.exports = app => {
  app.get('/project', (req, res) => {

    Project.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send({ project: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-project', (req, res) => {

    Project.create(req.body).then(() => {
      res.send('Project Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-project', (req, res) => {

    Project.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Project updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-project', (req, res) => {

    Project.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Project Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}