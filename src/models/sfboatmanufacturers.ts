/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('sfboatmanufacturers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'sfboatmanufacturers',
    schema: 'public'
  })
}
