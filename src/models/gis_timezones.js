/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gis_timezones', {
    gid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tzid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    the_geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_timezones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gis_timezone_the_geom_gist',
        fields: [
          { name: 'the_geom' }
        ]
      },
      {
        name: 'gis_timezones_pkey',
        unique: true,
        fields: [
          { name: 'gid' }
        ]
      }
    ]
  })
}
