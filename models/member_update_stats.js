/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_update_stats', {
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    num_records: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    num_current: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    num_errors: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'member_update_stats',
    schema: 'wh2o'
  });
};
