import { pgClient, DataTypes } from '../config'
const Project = require('../models/projects')(pgClient, DataTypes)

module.exports = app => {
  app.get('/projects', async (req, res) => {

    try {

    let result

      const params = {
        limit: 100,
        offset: 0,
        where: {}
      }

      if (req.query.id) {
        params.where['id'] = req.query.id
        result = await Project.findOne(params)
      } else {
        result = await Project.findAndCountAll(params)
      }

      res.send(result).status(200)
    } catch (error) {
      console.log(error)
      res.send(error).status(404)
    }
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
