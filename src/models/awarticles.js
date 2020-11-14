/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('awarticles', {
    articleid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    abstractphoto: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hascontents: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentsphoto: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    posted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shortname: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    releasedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: 'tells if article is deleted'
    }
  }, {
    sequelize,
    tableName: 'awarticles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'awarticles_pkey',
        unique: true,
        fields: [
          { name: 'articleid' }
        ]
      },
      {
        name: 'shortname',
        fields: [
          { name: 'shortname' }
        ]
      }
    ]
  })
}
