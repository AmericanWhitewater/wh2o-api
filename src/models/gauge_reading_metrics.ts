/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gauge_reading_metrics', {
    shortkey: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'name of the reading type.'
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Unit name (e.g. \'cfs\')'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Full name of unit "Cubic Feet Per Second"'
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    format: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'sprintf format for how this should be displayed'
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0',
      comment: 'sort order for this column'
    }
  }, {
    sequelize,
    tableName: 'gauge_reading_metrics',
    schema: 'public'
  })
}
