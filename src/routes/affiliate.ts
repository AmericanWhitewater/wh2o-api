import { pgClient, DataTypes } from "../config";
const Affiliate = require('../models/affiliates')(pgClient, DataTypes)

module.exports = app => {
  app.get('/affiliates', (req, res) => {

    Affiliate.findAll().then(result => {
      res.send(result).status(200);
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/affiliates-state', (req, res) => {

    Affiliate.findAll({
      where: {
        state: req.query.state
      }
    }).then(result => {
      res.send(result).status(200);
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/affiliate', (req, res) => {

    Affiliate.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send(result).status(200);
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-affiliate', (req, res) => {

    Affiliate.create(req.body).then(() => {
      res.send('Affiliate Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-affiliate', (req, res) => {

    Affiliate.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Affiliate updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-affiliate', (req, res) => {

    Affiliate.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Affiliate Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}