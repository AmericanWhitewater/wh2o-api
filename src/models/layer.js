/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('layer', {
    topology_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'topology',
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
      unique: "layer_schema_name_table_name_feature_column_key"
    },
    table_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "layer_schema_name_table_name_feature_column_key"
    },
    feature_column: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "layer_schema_name_table_name_feature_column_key"
    },
    feature_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    child_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'layer',
    schema: 'topology',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "layer_pkey",
        unique: true,
        fields: [
          { name: "topology_id" },
          { name: "layer_id" },
        ]
      },
      {
        name: "layer_schema_name_table_name_feature_column_key",
        unique: true,
        fields: [
          { name: "schema_name" },
          { name: "table_name" },
          { name: "feature_column" },
        ]
      },
    ]
  });
};
