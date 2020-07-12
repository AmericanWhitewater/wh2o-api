/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gauge_notify_history', {
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'who',
      primaryKey: true
    },
    gauge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'what',
      primaryKey: true
    },
    when: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when'
    },
    metric: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gauge_notify_history',
    schema: 'public'
  });
};
