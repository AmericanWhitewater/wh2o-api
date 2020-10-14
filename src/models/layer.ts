/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('layer', {
    topology_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'topology',
        },
        key: 'id'
      }
    },
    layer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    schema_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    table_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    feature_column: {
      type: DataTypes.STRING,
      allowNull: false
    },
    feature_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    child_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'layer',
    schema: 'topology',
    hasTrigger: true
  })
}
