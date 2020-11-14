/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('triplog_photos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    caption: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    rapidname: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    ext: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    isvideo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filesize: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.STRING(80),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: DataTypes.BLOB
    }
  }, {
    sequelize,
    tableName: 'triplog_photos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'journal_photos_idx_journal',
        fields: [
          { name: 'triplog_id' }
        ]
      },
      {
        name: 'triplog_photos_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
