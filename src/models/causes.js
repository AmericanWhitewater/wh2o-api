/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('causes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cause: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'causes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "causes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
