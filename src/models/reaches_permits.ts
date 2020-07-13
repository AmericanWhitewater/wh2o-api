/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('reaches_permits', {
    reachid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'id of river that allows permit',
      primaryKey: true
    },
    state: {
      type: DataTypes.CHAR(7),
      allowNull: false,
      comment: 'state to show.',
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'reaches_permits',
    schema: 'public'
  })
}
