import { pgClient, DataTypes } from '../config'
const Comment = require('../models/comments')(pgClient, DataTypes)

const _sortNewestFirst = (arr) => {
  const sortedComments = arr.sort(function (a, b) {
    return a.posted - b.posted
  })

  return sortedComments
}

module.exports = app => {

  app.get('/reach-warnings', (req, res) => {

    Comment.findAll({
      where: {
        sectionid: req.query.sectionid,
        type: 'warning'
      }
    }).then(result => {
      res.send(_sortNewestFirst(result)).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/reach-comments', (req, res) => {

    Comment.findAll({
      where: {
        sectionid: req.query.sectionid,
        type: 'comment'
      }
    }).then(result => {
      res.send({ comments: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.get('/comment', (req, res) => {

    Comment.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send({ comment: result }).status(200)
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-comment', (req, res) => {

    Comment.create(req.body).then(() => {
      res.send('Comment Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.put('/update-comment', (req, res) => {

    Comment.update(req.body, {
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Comment updated').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-comment', (req, res) => {

    Comment.destroy({
      where: {
        id: req.query.id
      }
    }).then(() => {
      res.send('Comment Deleted').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).send(500)
    })

  })

}
