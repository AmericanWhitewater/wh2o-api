/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_notify', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "user's id"
    },
    min: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0,
      comment: "minimum to email"
    },
    metric: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "metric we are dealing with"
    },
    show: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "show on the gauge page"
    },
    gauge_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "gauge to link to"
    },
    asap: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "show the gauge as soon as it comes up"
    },
    down: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'gauge_notify',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "gauge_notify_idx_uid",
        fields: [
          { name: "uid" },
        ]
      },
      {
        name: "gauge_notify_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
