/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('event_notify', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eventid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'event_notify',
    schema: 'public'
  })
}
