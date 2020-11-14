import { pgClient, DataTypes } from '../config'
const MemberUpdateStats = require('../models/member_update_stats')(pgClient, DataTypes)

module.exports = (app) => {
  app.get('/member-update-stats', (req, res) => {
    MemberUpdateStats.findAll({
      limit:5
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
