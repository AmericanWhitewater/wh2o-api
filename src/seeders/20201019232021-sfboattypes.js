'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('sfboattypes', [
      {
        boattype: 'I',
        description: 'Inflatable Kayak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boattype: 'K',
        description: 'Whitewater Kayak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boattype: 'N',
        description: 'Open Canoe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boattype: 'O',
        description: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boattype: 'R',
        description: 'Raft',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        boattype: 'T',
        description: 'Kayak - Other',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('sfboattypes', null, {});
  }
};
