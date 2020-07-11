const routes = [
  require('./accidents'),
  require('./comments'),
  require('./rapids'),
  require('./reaches')
]

module.exports = app => {

  for (const route of routes) {
    route(app)
  }

}