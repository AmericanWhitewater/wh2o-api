/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membership_types', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(80),
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    month: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    summary: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    fundstomembership: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: 'amount of $$ that goes to membership, the rest is a donation'
    },
    order: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: 'order of presentation low to high'
    },
    fundstopremium: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: "0",
      comment: 'how much money goes to product if that is selected'
    }
  }, {
    sequelize,
    tableName: 'membership_types',
    schema: 'wh2o'
  });
};
