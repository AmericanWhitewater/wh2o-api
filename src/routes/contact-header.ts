import { pgClient, DataTypes } from '../config'
const ContactHeader = require('../models/contactheader')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/contact-header', (req, res) => {
    ContactHeader.findAll({
      limit: 20
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
