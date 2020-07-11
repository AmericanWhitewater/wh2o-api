const routes = [
  require('./accidents'),
  require('./reaches')
]

module.exports = app => {

  for (const route of routes) {
    route(app)
  }

}