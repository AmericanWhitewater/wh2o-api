/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_ws2ts', {
    write_sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'writesequence start',
      primaryKey: true
    },
    write_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'the write date of the operation'
    }
  }, {
    sequelize,
    tableName: 'gauge_ws2ts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gauge_ws2ts_pkey',
        unique: true,
        fields: [
          { name: 'write_sequence' }
        ]
      }
    ]
  })
}
