'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.dropTable('comments')
    await queryInterface.createTable('comments', {
      uid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        comment: 'user id that made the comment'
      },
      sectionid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        comment: 'id of object from the section'
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: 'name of the person that commented (depricated)'
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'comment text'
      },
      posted: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'posted date'
      },
      id: {
        type: DataTypes.BIGINT,
        comment: 'comment ID',
        primaryKey: true,
        autoIncrement: true
      },
      section: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'river',
        comment: 'section this applies to (river,photo,journal)'
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'comment',
        comment: 'type of comment (warning,complaint,comment)'
      },
      deleted: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Deleted timestamp'
      },
      duid: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'Deleted UID '
      },
      revision: {
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: 'Revision #'
      },
      is_final: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'Is this the final comment (vs. some old revision)'
      },
      is_private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Is this a private comment?'
      }
    },
      {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
