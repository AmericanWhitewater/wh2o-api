/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('wh2osettings', {
    setting: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'setting name',
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'value'
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'when it was updated.'
    }
  }, {
    sequelize,
    tableName: 'wh2osettings',
    schema: 'public'
  })
}
