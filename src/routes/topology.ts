import { pgClient, DataTypes } from "../config";
const Topology = require('../models/topology')(pgClient, DataTypes)

module.exports = app => {
  app.get("/topology-all", (req, res) => {
    Topology.findAll()
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });
  });

  app.get('/topology', (req, res) => {

    Topology.findOne({
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

  app.post('/new-topology', (req, res) => {

    Topology.create(req.body).then(() => {
      res.send('Topology Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-topology', (req, res) => {

    Topology.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Topology updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-topology', (req, res) => {

    Topology.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Topology Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}