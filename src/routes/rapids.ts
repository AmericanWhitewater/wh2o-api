import { pgClient, DataTypes } from '../config'
const Rapid = require('../models/rapids')(pgClient, DataTypes)

module.exports = app => {
  app.get('/rapids', (req, res) => {

    Rapid.findAll({
      where: {
        reachid: req.query.reachid
      }
    }).then(result => {

      /**
       * sorted put-in first
       */
      const sortedRapids = result.sort((a, b) => {
        return a.distance - b.distance
      })

      res.send(sortedRapids).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/rapid', (req, res) => {

    Rapid.findOne({
      where: {
        rapidid: req.query.rapidid,
      },
    })
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })

  })

  app.post('/new-rapid', (req, res) => {

    Rapid.create(req.body).then(() => {
      res.send('Rapid Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-rapid', (req, res) => {

    Rapid.update(req.body, {
      where: {
        rapidid: req.query.rapidid
      }
    }).then(() => {
      res.send('Rapid updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send({ message: err }).status(500)
    })

  })

  app.delete('/delete-rapid', (req, res) => {

    Rapid.destroy({
      where: {
        rapidid: req.query.rapidid
      }
    }).then(() => {
      res.send('Rapid Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}
