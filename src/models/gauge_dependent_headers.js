/* jshint indent: 2 */

const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gauge_dependent_headers', {
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'source (see dependents)'
    },
    targetid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'see dependents'
    },
    time_adjustment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: DataTypes.TIME
    },
    comment: {
      type: DataTypes.STRING(160),
      allowNull: true,
      defaultValue: 'NULL',
      comment: 'comment to describe this gauge relationship'
    },
    metricid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: 'metric to describe'
    },
    estimated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'is this gauge estimated?'
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'id number of corr.',
      primaryKey: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'are you deleted?'
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'user id'
    },
    excluded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'should we exclude from the summary'
    }
  }, {
    sequelize,
    tableName: 'gauge_dependent_headers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gauge2river_idx',
        unique: true,
        fields: [
          { name: 'sourceid' },
          { name: 'targetid' },
          { name: 'metricid' }
        ]
      },
      {
        name: 'gauge_dependent_headers_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
