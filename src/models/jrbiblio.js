/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrbiblio', {
    artid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    arttitle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    artdate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startpage: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    volume: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    issuenumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    issueyear: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'jrbiblio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jrbiblio_pkey",
        unique: true,
        fields: [
          { name: "artid" },
        ]
      },
    ]
  });
};
