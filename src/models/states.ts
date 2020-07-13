/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('states', {
    record_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gmi_admin: {
      type: DataTypes.CHAR(7),
      allowNull: true,
      comment: 'this is the GMI key'
    },
    fips: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: 'FIPS code for State'
    }
  }, {
    sequelize,
    tableName: 'states',
    schema: 'public'
  })
}
