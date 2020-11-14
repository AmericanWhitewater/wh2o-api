/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('factors', {
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
    indexes: [
      {
        name: 'factors_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
