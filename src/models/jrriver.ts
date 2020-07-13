/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('jrriver', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    theriver: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrriver',
    schema: 'wh2o'
  })
}
