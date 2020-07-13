import { pgClient, DataTypes } from "../config";
const AffiliateReach = require('../models/affiliates_reaches')(pgClient, DataTypes)

module.exports = app => {
  app.get('/affiliate-reaches', (req, res) => {

    AffiliateReach.findAll({
      where: {
        affiliateid: req.query.affiliateid,
      },
    })
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });

  })

  app.post('/new-affiliate-reach', (req, res) => {

    AffiliateReach.create(req.body).then(() => {
      res.send('Affiliate reach created').status(200)
    }).catch(err => {
      console.log('err: ', err)
      res.send(err).status(500)
    })

  })

  app.delete('/delete-affiliate-reach', (req, res) => {

    AffiliateReach.destroy({
      where: {
        affiliateid: req.query.affiliateid,
        reachid: req.query.reachid,
      },
    })
      .then(() => {
        res.send("Affiliate reach Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });

  })

}