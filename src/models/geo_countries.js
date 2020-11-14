/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('geo_countries', {
    id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: 'fips country code.',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      comment: 'name of the country (english)'
    }
  }, {
    sequelize,
    tableName: 'geo_countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'geo_countries_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
