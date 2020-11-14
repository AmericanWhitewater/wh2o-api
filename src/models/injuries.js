/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('injuries', {
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
    timestamps: false,
    indexes: [
      {
        name: 'injuries_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
