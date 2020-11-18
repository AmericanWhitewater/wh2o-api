'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accidents_causes', {
      accident_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cause_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
      {
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'accidents_causes_pkey',
            unique: true,
            fields: [
              { name: 'accident_id' },
              { name: 'cause_id' }
            ]
          }
        ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('accidents_causes');
  }
};