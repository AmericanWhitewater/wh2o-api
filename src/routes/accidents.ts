module.exports = (app) => {
  const models = require("../models")
  const Accident = models.accident
  const Cause = models.cause
  const Factor = models.factor
  const Injury = models.injury

  app.get('/accident', (req, res) => {
    Accident.findOne({
      where: {
        id: req.query.id,
      },
      include: [
        {
          model: Cause
        },
        {
          model: Factor
        },
        {
          model: Injury
        }
      ]
    })
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.post('/new-accident', (req, res) => {
    Accident.create({ ...req.body })
      .then((response) => {
        res.send(response).status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-accident', (req, res) => {
    Accident.update(req.body, {
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('Accident updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-accident', (req, res) => {
    Accident.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send('Accident Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })

  app.get('/accidents', async (req, res) => {

    try {
      const result = await Accident.findAndCountAll({
        limit: 25
      })

      if (result) {
        res.status(200).send(result)
      }

    } catch (error) {
      console.log('error :>> ', error)
      res.status(500).send(error)
    }

  })

}
