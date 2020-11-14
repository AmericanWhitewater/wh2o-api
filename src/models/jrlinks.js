/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrlinks', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    reachid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrlinks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jrlinks_pkey",
        unique: true,
        fields: [
          { name: "artid" },
          { name: "reachid" },
        ]
      },
    ]
  });
};
