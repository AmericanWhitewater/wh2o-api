/* jshint indent: 2 */

const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_map', {
    source: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    source_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    huc: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    update_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    glat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    glon: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    update_start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    header_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    loc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    data: {
      type: DataTypes.STRING,
      allowNull: true
    },
    update_calculated_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clean_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gauge_map',
    schema: 'public',
    timestamps: false
  })
}
