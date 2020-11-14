/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('member_update_stats', {
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "index_date",
        fields: [
          { name: "update_date" },
        ]
      },
      {
        name: "member_update_stats_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
