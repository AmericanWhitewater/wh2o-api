import { pgClient, DataTypes } from '../config'
const News = require('../models/awnews')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/news', (req, res) => {
    News.findAll({
      where: {
        articleid: req.query.articleid,
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
}
