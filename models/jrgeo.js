/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jrgeo', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    geoloc: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrgeo',
    schema: 'wh2o'
  });
};
