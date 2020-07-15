import { pgClient, DataTypes } from '../config'
const Article = require('../models/awarticles')(pgClient, DataTypes)

module.exports = app => {
  app.get('/article', (req, res) => {

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

  app.get('/front-page-news', (req, res) => {

    Article.findAll({
      limit: 8,
      where: {},
      order: [["releasedate", "DESC"]],
    })
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });

  })

  app.post('/new-article', (req, res) => {

    Article.create(req.body).then(() => {
      res.send('Article Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-article', (req, res) => {

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

  app.delete('/delete-article', (req, res) => {

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

}
