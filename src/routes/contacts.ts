import { pgClient, DataTypes } from '../config'
const Contacts = require('../models/contacts')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/contacts', (req, res) => {
    Contacts.findAll({
      limit:2
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
