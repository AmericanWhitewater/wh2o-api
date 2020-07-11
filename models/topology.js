/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topology', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    srid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precision: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    hasz: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'topology',
    schema: 'topology'
  });
};
