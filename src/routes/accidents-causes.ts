import { pgClient, DataTypes } from "../config";
const AccidentCause = require('../models/accidents_causes')(pgClient, DataTypes)

module.exports = app => {
  app.get('/accident-cause', (req, res) => {

    AccidentCause.findOne({
      where: {
        accident_id: req.query.accident_id
      }
    }).then(result => {
      res.send(result).status(200);
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-accident-cause', (req, res) => {

    AccidentCause.create(req.body).then(() => {
      res.send('AccidentCause Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-accident-cause', (req, res) => {

    AccidentCause.update(req.body, {
      where: {
        accident_id: req.query.accident_id
      }
    }).then(() => {
      res.send('AccidentCause updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-accident-cause', (req, res) => {

    AccidentCause.destroy({
      where: {
        accident_id: req.query.accident_id
      }
    }).then(() => {
      res.send('AccidentCause Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}