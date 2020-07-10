/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gauge_updates', {
    gauge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'gauge',
      primaryKey: true
    },
    metric: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'metric',
      primaryKey: true
    },
    lobs_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'last reading time'
    },
    lobs_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: 'last reading id'
    },
    lobs_reading: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: 'last reading'
    },
    obs_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'main reading time'
    },
    obs_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: 'main reading id'
    },
    obs_reading: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: 'main reading'
    },
    obs_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'if we have an observation comment'
    },
    write_sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: now(),
      comment: 'when this entry was updated.'
    },
    obs_ref: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    last_journal_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'last time a journal was written on the gauge.'
    },
    gd_ref: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'gauge dependent reference'
    }
  }, {
    sequelize,
    tableName: 'gauge_updates',
    schema: 'public',
    hasTrigger: true
  });
};
