const routes = [
  require('./accidents'),
  require('./articles'),
  require('./comments'),
  require('./events'),
  require('./gis-hucs'),
  require('./gis-states'),
  require('./gis-zips'),
  require('./projects'),
  require('./rapids'),
  require('./reaches'),
  require('./users')
]

module.exports = app => {

  for (const route of routes) {
    route(app)
  }

}