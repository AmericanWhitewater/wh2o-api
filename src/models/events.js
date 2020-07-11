/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(eventseq::regclass)",
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "NULL"
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    orgname: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    orgaddress: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    orgphone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    orgfax: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    orgemail: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    rivid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expectpart: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expectspec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    issue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    media: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nowreventinfo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    html_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    retired: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'events',
    schema: 'public'
  });
};
