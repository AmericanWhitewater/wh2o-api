/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Causes = sequelize.define('cause', {
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
    timestamps: false
  })

  Causes.associate = models => {
    Causes.belongsToMany(models.accident, { through: 'accident_causes'})
  }

  return Causes
}
