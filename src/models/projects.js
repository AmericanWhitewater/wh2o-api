/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('projects', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(51),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    deleted: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    shortname: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'projects',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "projects_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
