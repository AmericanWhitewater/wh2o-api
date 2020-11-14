import { pgClient, DataTypes } from '../config'
const MembershipTypes = require('../models/membership_types')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/membership-types', (req, res) => {
    MembershipTypes.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
