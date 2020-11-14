import { pgClient, DataTypes } from '../config'
const GagePersonalSettings = require('../models/gauge_personal_settings')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/gage-personal-settings', (req, res) => {
    if (req.query.uid) {
      GagePersonalSettings.findOne({
        where: {
          uid: req.query.uid
        }
      })
        .then((result) => {
          res.send(result).status(200)
        })
        .catch((err) => {
          console.log(err)
          res.send(err).status(404)
        })
    } else {
      GagePersonalSettings.findAll()
        .then((result) => {
          res.send(result).status(200)
        })
        .catch((err) => {
          console.log(err)
          res.send(err).status(404)
        })
    }
  })
}
