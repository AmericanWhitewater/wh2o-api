/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('accidents_injuries', {
    accident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    injury_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'accidents_injuries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'accidents_injuries_pkey',
        unique: true,
        fields: [
          { name: 'accident_id' },
          { name: 'injury_id' }
        ]
      }
    ]
  })
}
