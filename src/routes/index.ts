const apiRoutes = [
  require('./accidents'),
  require('./articles'),
  require('./comments'),
  require('./events'),
  require('./gage-reading-metrics'),
  require('./gage-sources'),
  require('./gage-updates'),
  require('./gis-hucs'),
  require('./gis-states'),
  require('./gis-zips'),
  require('./projects'),
  require('./rapids'),
  require('./reaches'),
  require('./users')
]

module.exports = app => {

  for (const route of apiRoutes) {
    route(app)
  }

}