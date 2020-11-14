/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_reading_metrics', {
    shortkey: {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: 'name of the reading type.'
    },
    unit: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "Unit name (e.g. 'cfs')"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'Full name of unit "Cubic Feet Per Second"'
    },
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    format: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'sprintf format for how this should be displayed'
    },
    sortorder: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: 'sort order for this column'
    }
  }, {
    sequelize,
    tableName: 'gauge_reading_metrics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gauge_reading_metrics_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
