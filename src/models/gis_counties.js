/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gis_counties', {
    gid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_counties',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'county_geom',
        fields: [
          { name: 'the_geom' }
        ]
      },
      {
        name: 'gis_counties_pkey',
        unique: true,
        fields: [
          { name: 'gid' }
        ]
      }
    ]
  })
}
