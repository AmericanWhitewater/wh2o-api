/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('reaches_states', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(7),
      allowNull: false,
      comment: "state a river is in",
      unique: "reaches_states_idx"
    },
    reach_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "reach that is in the state",
      unique: "reaches_states_idx"
    }
  }, {
    sequelize,
    tableName: 'reaches_states',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "reaches_states_idx",
        unique: true,
        fields: [
          { name: "state" },
          { name: "reach_id" },
        ]
      },
      {
        name: "reaches_states_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
