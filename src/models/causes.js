/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Causes = sequelize.define('causes', {
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
        name: 'causes_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  Causes.associate = models => {
    Causes.belongsToMany(models.accidents, { through: 'accidents_causes'})
  }

  return Causes
}
