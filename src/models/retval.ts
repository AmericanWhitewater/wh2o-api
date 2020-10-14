/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('retval', {
    min: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'retval',
    schema: 'public'
  })
}
