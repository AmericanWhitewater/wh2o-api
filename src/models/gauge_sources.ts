/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gauge_sources', {
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'name of source',
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'formal title of the source'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'URL to data source Homepage.'
    },
    update_type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'h',
      comment: 'm - manual (no programmatic updates) h - header based (uses the last_update and update frequency to serve a list of headers needing readings ) r - reading based (uses incoming readings to to populate the header table later ).'
    },
    update_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0',
      comment: 'on reading-based updates (r) this is the interval to update on in seconds, on header-based gauges (h) this is the interval to update gauge headers on in seconds.'
    },
    update_start_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('NOW'),
      comment: 'when to start requesting updates on a reading-based gauge. For header based gauges, this is the time to do the update.'
    },
    data: {
      type: DataTypes.CHAR(512),
      allowNull: true,
      comment: 'Could contain meta-data about the updater'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('NOW'),
      comment: DataTypes.TIME
    },
    populated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('NOW'),
      comment: 'when the header was last populated.'
    },
    disclaimer: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gauge_sources',
    schema: 'public'
  })
}
