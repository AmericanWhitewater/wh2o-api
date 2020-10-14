/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('linker_lists', {
    sourcecomp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sourceid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetcomp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mutual: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'linker_lists',
    schema: 'wh2o'
  })
}
