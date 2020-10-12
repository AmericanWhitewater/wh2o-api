import { Express, Request, Response } from 'express'
import { pgClient, DataTypes } from '../config'
const Article = require('../models/awarticles')(pgClient, DataTypes)

export = (app: Express) => {
  app.get('/article', (req: Request, res: Response) => {

    Article.findOne({
      where: {
        articleid: req.query.articleid
      }
    }).then(result => {
      res.send({ article: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/front-page-news', (req: Request, res: Response) => {

    Article.findAll({
      limit: 8,
      where: {},
      order: [['releasedate', 'DESC']],
    })
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })

  })

  app.post('/new-article', (req: Request, res: Response) => {

    Article.create(req.body).then((result) => {
      if (result && result.dataValues) {
        return res.send(result.dataValues).status(200)
      }

    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-article', (req: Request, res: Response) => {

    Article.update(req.body, {
      where: {
        articleid: req.query.articleid
      }
    }).then(() => {
      res.send('Article updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-article', (req: Request, res: Response) => {

    Article.destroy({
      where: {
        articleid: req.query.articleid
      }
    }).then(() => {
      res.send('Article Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

  app.get('/articles', async (req: Request, res: Response) => {
    try {
      const result = await Article.findAll({
        order: [['releasedate', 'DESC']],
      })
      if (result) {
        res.status(200).send(result)
      }
    } catch (error) {
      res.status(500).send(error)
    }
  })
}
