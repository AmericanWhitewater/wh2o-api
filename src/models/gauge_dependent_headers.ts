/* jshint indent: 2 */

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
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL',
      comment: 'comment to describe this gauge relationship'
    },
    metricid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
      comment: 'metric to describe'
    },
    estimated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'is this gauge estimated?'
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'id number of corr.',
      primaryKey: true,
      autoIncrement: true
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
      defaultValue: '0',
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
    schema: 'public'
  })
}
