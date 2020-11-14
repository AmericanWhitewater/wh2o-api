/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('linker_lists', {
    sourcecomp: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    sourceid: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    targetcomp: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    targetid: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mutual: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'linker_lists',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "linker_lists_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sourcecomp",
        fields: [
          { name: "sourcecomp" },
          { name: "sourceid" },
        ]
      },
      {
        name: "targetcomp",
        fields: [
          { name: "targetcomp" },
          { name: "targetid" },
          { name: "mutual" },
        ]
      },
    ]
  });
};
