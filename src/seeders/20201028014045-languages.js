'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('languages', [
      {
        language: 'english',
        key: 'en'
      },
      {
        language: 'spanish',
        key: 'es'
      },
      {
        language: 'french',
        key: 'fr'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('languages', null, {})
  }
};
