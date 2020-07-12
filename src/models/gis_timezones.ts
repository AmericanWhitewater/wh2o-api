/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gis_timezones', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tzid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    the_geom: {
      type: DataTypes.ENUM(),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_timezones',
    schema: 'public'
  });
};
