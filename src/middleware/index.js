const middlewares = [
  require('./morgan')
]

module.exports = app => {

  for (const item of middlewares) {
    item(app)
  }

}
