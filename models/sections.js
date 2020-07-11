/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sections', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lookup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preload: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sections',
    schema: 'wh2o'
  });
};
