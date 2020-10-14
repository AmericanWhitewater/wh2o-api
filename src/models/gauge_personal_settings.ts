/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_personal_settings', {
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'uid of user who\'s gauge setting it is',
      primaryKey: true
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: 'min time to notify'
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: 'max time to notify'
    },
    tz: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: DataTypes.TIME
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'email of person'
    },
    format: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '0=normal 1=pager'
    }
  }, {
    sequelize,
    tableName: 'gauge_personal_settings',
    schema: 'public'
  })
}
