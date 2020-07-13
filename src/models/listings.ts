/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('listings', {
    listing: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arealookup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    public: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'listings',
    schema: 'wh2o'
  })
}
