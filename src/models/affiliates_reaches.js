/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('affiliates_reaches', {
    affiliateid: {
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
    tableName: 'affiliates_reaches',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "club2river_pkey",
        unique: true,
        fields: [
          { name: "affiliateid" },
          { name: "reachid" },
        ]
      },
    ]
  });
};
