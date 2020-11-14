import { pgClient, DataTypes } from '../config'
const ListingGroups = require('../models/listinggroups')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/listing-groups', (req, res) => {
    ListingGroups.findAll({
      limit: 5
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
