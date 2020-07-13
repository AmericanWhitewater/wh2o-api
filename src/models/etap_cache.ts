/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('etap_cache', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'id of trans',
      primaryKey: true,
      autoIncrement: true
    },
    parameters: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: DataTypes.JSON
    },
    method: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'method of what is running'
    },
    returncode: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'return code of processed method'
    },
    cachedate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when added'
    },
    rundate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when it ran'
    }
  }, {
    sequelize,
    tableName: 'etap_cache',
    schema: 'public'
  })
}
