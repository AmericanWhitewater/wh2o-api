import { pgClient, DataTypes } from '../config'
const User = require('../models/users')(pgClient, DataTypes)

module.exports = app => {
  app.get('/user', (req, res) => {

    User.findOne({
      where: {
        uid: req.query.uid
      }
    }).then(result => {
      res.send({ user: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-user', (req, res) => {

    User.create(req.body).then(() => {
      res.send('Article Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-user', (req, res) => {

    User.update(req.body, {
      where: {
        uid: req.query.uid
      }
    }).then(() => {
      res.send('User updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-user', (req, res) => {

    User.destroy({
      where: {
        uid: req.query.uid
      }
    }).then(() => {
      res.send('User Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}