/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('documents', {
    documentid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shortname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    editdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recipient: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    author: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    document: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    deleted: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    document_size: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "documents_pkey",
        unique: true,
        fields: [
          { name: "documentid" },
        ]
      },
      {
        name: "index_2",
        fields: [
          { name: "shortname" },
          { name: "title" },
        ]
      },
      {
        name: "index_3",
        fields: [
        ]
      },
    ]
  });
};
