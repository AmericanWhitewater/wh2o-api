/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('accidents_factors', {
    accident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    factor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'accidents_factors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "accidents_factors_pkey",
        unique: true,
        fields: [
          { name: "accident_id" },
          { name: "factor_id" },
        ]
      },
    ]
  });
};
