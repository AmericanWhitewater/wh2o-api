/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('geo_states', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gmi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fips: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortkey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fips_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aw_region: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'aw\'s region code.'
    }
  }, {
    sequelize,
    tableName: 'geo_states',
    schema: 'public'
  })
}
