/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('triplog_photos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rapidname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    ext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isvideo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filesize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    triplog_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'who the photo is of'
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'description of the photo'
    },
    allowhtml: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'description should be in html, to preserve some historical photo html.'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'url (for example video) for externally hosted images'
    }
  }, {
    sequelize,
    tableName: 'triplog_photos',
    schema: 'public'
  })
}
