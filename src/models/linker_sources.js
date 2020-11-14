/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('linker_sources', {
    source: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    target: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    params: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    location: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    position: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'linker_sources',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "linker_sources_pkey",
        unique: true,
        fields: [
          { name: "source" },
          { name: "target" },
        ]
      },
      {
        name: "target",
        fields: [
          { name: "target" },
        ]
      },
    ]
  });
};
