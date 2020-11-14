import { pgClient, DataTypes } from '../config'
const Comment = require('../models/comments')(pgClient, DataTypes)

const _sortNewestFirst = (arr) => {
  const sortedComments = arr.sort((a, b) => {
    return a.posted - b.posted
  })

  return sortedComments
}

module.exports = app => {

  app.get('/comments', (req, res) => {

    if (req.query.id) {
      Comment.findOne({
        where: {
          id: req.query.id
        }
      }).then(result => {
        res.send(result).status(200)
      }).catch(err => {
        console.log(err)
        res.send(err).status(404)
      })
    } else {

      const params = {
        limit: 2,
        offset: 0,
        where: {}
      }

      if (req.query.type) {
        params.where['type'] = req.query.type
      }

      if (req.query.sectionid) {
        params.where['sectionid'] = req.query.sectionid
      }

      if (req.query.uid) {
        params.where['uid'] = req.query.uid
      }

      Comment.findAll(params).then(result => {
        res.send(result).status(200)
      }).catch(err => {
        console.log(err)
        res.send(err).status(404)
      })
    }
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
