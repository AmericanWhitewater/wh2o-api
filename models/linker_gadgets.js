/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('linker_gadgets', {
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    lookup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gadget: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mutual: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_list: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      comment: 'is this resource associated with a single (id-based) resource or all resources regardless of id?'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'linker_gadgets',
    schema: 'wh2o'
  });
};
