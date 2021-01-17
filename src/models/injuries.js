/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Injury = sequelize.define('injury', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    injury: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'injuries',
    schema: 'public',
    timestamps: false
  })

  Injury.associate = models => {
    Injury.belongsToMany(models.accident, { through: 'accident_injuries' })
  }

  return Injury
}
