/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Factor = sequelize.define('factor', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    factor: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'factors',
    schema: 'public',
    timestamps: false,
  })

  Factor.associate = models => {
    Factor.belongsToMany(models.accident, { through: 'accident_factors' })
  }

  return Factor
}
