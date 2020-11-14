/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('awalerts', {
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
    value: {
      type: DataTypes.STRING(10),
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
    tableName: 'awalerts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "articleid",
        fields: [
          { name: "articleid" },
        ]
      },
      {
        name: "awalerts_pkey",
        unique: true,
        fields: [
          { name: "articleid" },
          { name: "type" },
          { name: "value" },
        ]
      },
      {
        name: "idxarticleid",
        fields: [
          { name: "articleid" },
        ]
      },
      {
        name: "idxtype",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "tve",
        fields: [
          { name: "type" },
          { name: "value" },
          { name: "expiration" },
        ]
      },
    ]
  });
};
