const apiRoutes = [
  require('./accidents'),
  require('./affiliate'),
  require('./affiliate-reach'),
  require('./alerts'),
  require('./articles'),
  require('./comments'),
  require('./documents'),
  require('./events'),
  require('./gage-reading-metrics'),
  require('./gage-sources'),
  require('./gage-updates'),
  require('./gis-hucs'),
  require('./gis-states'),
  require('./gis-zips'),
  require('./injuries'),
  require('./projects'),
  require('./rapids'),
  require('./reaches'),
  require('./states'),
  require('./trip-log'),
  require('./trip-log-photo'),
  require('./users')
]

module.exports = app => {

  for (const route of apiRoutes) {
    route(app)
  }

}