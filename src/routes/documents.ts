import { pgClient, DataTypes } from '../config'
const Document = require('../models/documents')(pgClient, DataTypes)

module.exports = (app) => {
 
 app.get('/documents', async (req, res) => {

    try {

      let result

      const params = {
        limit: 100,
        offset: 0,
        where: {}
      }

      if (req.query.id) {
        params.where['documentid'] = req.query.documentid
        result = await Document.findOne(params)
      } else {
        result = await Document.findAndCountAll(params)
      }

      res.send(result).status(200)
    } catch (error) {
      console.log(error)
      res.send(error).status(404)
    }
  })

  app.post('/new-document', (req, res) => {
    Document.create(req.body)
      .then(() => {
        res.send('Document Created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-document', (req, res) => {
    Document.update(req.body, {
      where: {
        documentid: req.query.documentid,
      },
    })
      .then(() => {
        res.send('Document updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-document', (req, res) => {
    Document.destroy({
      where: {
        documentid: req.query.documentid,
      },
    })
      .then(() => {
        res.send('Document Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })
}
