import { pgClient, DataTypes } from '../config'
import { Express, Request, Response } from 'express'
const Reach = require('../models/reaches')(pgClient, DataTypes)
const Sequelize = require('sequelize')
const Op = Sequelize.Op

export = (app: Express) => {
  app.get('/reach', (req: Request, res: Response) => {

    Reach.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send(result).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-reach', (req: Request, res: Response) => {

    Reach.create(req.body).then(() => {
      res.send('Reach Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-reach', (req: Request, res: Response) => {

    Reach.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Reach Updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-reach', (req: Request, res: Response) => {

    Reach.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Reach Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

  app.get('/reaches', async (req: Request, res: Response) => {

    try {

      const params = {
        limit: 100,
        offset: 0,
        where: {}
      }

      if (req.query.class) {
        params.where['class'] = req.query.class
      }

      if (req.query.river) {
        params.where['river'] = {
          [Op.like]: `%${req.query.river}%`
        }
      }

      if (req.query.section) {
        params.where['section'] = {
          [Op.like]: `%${req.query.section}%`
        }
      }

      const result = await Reach.findAndCountAll(params)

      if (result) {
        res.status(200).send(result)
      }
    } catch (error) {
      res.status(500).send(error)
      console.log('error :>> ', error)
    }

  })

}
