/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('reaches_states', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'state a river is in'
      // unique: true ?
    },
    reach_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'reach that is in the state'
    }
  }, {
    sequelize,
    tableName: 'reaches_states',
    schema: 'public',
    hasTrigger: true
  })
}
