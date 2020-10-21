const apiRoutes = [
  require('./accidents'),
  require('./accidents-causes'),
  require('./accidents-factors'),
  require('./affiliate'),
  require('./affiliate-reach'),
  require('./alerts'),
  require('./articles'),
  require('./boat-types'),
  require('./causes'),
  require('./comments'),
  require('./documents'),
  require('./events'),
  require('./gage-reading-metrics'),
  require('./gage-sources'),
  require('./gage-updates'),
  require('./gis-hucs'),
  require('./gis-states'),
  require('./gis-zips'),
  require('./hello'),
  require('./image-upload'),
  require('./injuries'),
  require('./layer'),
  require('./members'),
  require('./projects'),
  require('./rapids'),
  require('./reaches'),
  require('./states'),
  require('./topology'),
  require('./trip-log'),
  require('./trip-log-photo'),
  require('./users')
]

module.exports = app => {

  for (const route of apiRoutes) {
    route(app)
  }

}
