/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('security_defaults', {
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    redirect: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0"
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'security_defaults',
    schema: 'wh2o'
  });
};
