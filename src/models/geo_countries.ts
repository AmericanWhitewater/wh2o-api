/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('geo_countries', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'fips country code.',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'name of the country (english)'
    }
  }, {
    sequelize,
    tableName: 'geo_countries',
    schema: 'public'
  })
}
