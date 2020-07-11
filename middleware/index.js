const middleware = [
  require('./morgan')
]

module.exports = app => {

  for (const item of middleware) {
    item(app)
  }

}