/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gis_counties', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perimeter: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    countyp020: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fips: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state_fips: {
      type: DataTypes.STRING,
      allowNull: true
    },
    square_mil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    the_geom: {
      type: DataTypes.ENUM(),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_counties',
    schema: 'public'
  });
};
