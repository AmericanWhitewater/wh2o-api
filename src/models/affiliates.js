/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('affiliates', {
    last: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conemail: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    members: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reaches: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    volunteer: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    expiration: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: "0"
    },
    memberid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'affiliates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "affiliates_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_2",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_3",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
