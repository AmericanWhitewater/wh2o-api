/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('accidents_causes', {
    accident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cause_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accidents_causes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'accidents_causes_pkey',
        unique: true,
        fields: [
          { name: 'accident_id' },
          { name: 'cause_id' }
        ]
      }
    ]
  })
}
