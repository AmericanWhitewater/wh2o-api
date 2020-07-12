/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gauge_reading_sources', {
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'source description'
    },
    shortkey: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: 'source id.'
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gauge_reading_sources',
    schema: 'public'
  });
};
