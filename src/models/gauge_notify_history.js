/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_notify_history', {
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "who",
      primaryKey: true
    },
    gauge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "what",
      primaryKey: true
    },
    when: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "when"
    },
    metric: {
      type: DataTypes.SMALLINT,
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "gauge_notify_history_pkey",
        unique: true,
        fields: [
          { name: "uid" },
          { name: "gauge_id" },
          { name: "metric" },
        ]
      },
    ]
  });
};
