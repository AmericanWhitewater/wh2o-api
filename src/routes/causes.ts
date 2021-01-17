module.exports = (app) => {
  
  const Causes = require("../models").cause
  
  app.get('/causes', (req, res) => {
    Causes.findAll()
      .then((result) => {
        res.send(result).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })
}
