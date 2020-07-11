'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('reaches', [{
      river: 'river name',
      section: 'river section',
      is_final: false,
      class: 'V',
      description: 'river description, yo!'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('reaches', null, {});
    
  }
};
