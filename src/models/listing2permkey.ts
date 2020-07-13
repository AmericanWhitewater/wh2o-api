/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('listing2permkey', {
    listing: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    perm: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'listing2permkey',
    schema: 'wh2o'
  })
}
