/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('event_notify', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'event_notify_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
