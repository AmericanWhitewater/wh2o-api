const { pgClient, DataTypes } = require('../database')
const Reach = require('../models/reaches')(pgClient, DataTypes)

module.exports = app => {
  app.get('/reach', (req, res) => {

    Reach.findOne({
      where: {
        id: req.query.id
      }
    }).then(result => {
      res.send({ reach: result })
    }).catch(err => {
      console.log(err)
      res.send(err).status(404)
    })

  })

  app.post('/new-reach', (req, res) => {

    // const newReach = req.body.reach

    console.log('req.body :>> ', req.body);

    Reach.create(req.body).then(() => {
      res.send('Reach Created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err)
    })

    // const { reach } = req.body

    // console.log('reach :>> ', reach);

    // Reach.create({
    //   river: newReach.river,
    //   section: newReach.section,
    //   altname: newReach.altname,
    //   county: newReach.county,
    //   zipcode: newReach.zipcode,
    //   length: newReach.length,
    //   avggradient: newReach.avggradient,
    //   maxgradient: newReach.maxgradient,
    //   gaugeinfo: newReach.gaugeinfo,
    //   description: newReach.description,
    //   photoid: newReach.photoid,
    //   permitid: newReach.permitid,
    //   huc: newReach.huc,
    //   plat: newReach.plat,
    //   plon: newReach.plon,
    //   prrn: newReach.prrn,
    //   tlat: newReach.tlat,
    //   tlon: newReach.tlon,
    //   trrn: newReach.trrn,
    //   skid: newReach.skid,
    //   status: newReach.status,
    //   edited: newReach.edited,
    //   is_final: 

    // })

  })

}