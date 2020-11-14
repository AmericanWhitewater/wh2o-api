/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('awnews', {
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    expiration: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    priority: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'awnews',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "articleiddx3",
        fields: [
          { name: "articleid" },
        ]
      },
      {
        name: "awnews_pkey",
        unique: true,
        fields: [
          { name: "articleid" },
          { name: "type" },
        ]
      },
      {
        name: "tedx3",
        fields: [
          { name: "type" },
          { name: "expiration" },
        ]
      },
      {
        name: "typedx3",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
