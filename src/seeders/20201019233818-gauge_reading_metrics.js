'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gauge_reading_metrics', [
      {
        id: 1,
        shortkey: 'corr',
        unit: 'r.c.',
        name: 'Status',
        format: '%1.1f',
        sortorder: 99
      },
      {
        id: 2,
        shortkey: 'flow',
        unit: 'cfs',
        name: 'Flow',
        format: '%4.0f',
        sortorder: 10
      },
      {
        id: 3,
        shortkey: 'pc12h',
        unit: 'in/12h',
        name: 'Precip. in 12h',
        format: '%2.1f',
        sortorder: 86
      },
      {
        id: 4,
        shortkey: 'pc15m',
        unit: 'in/15min',
        name: 'Precip. in 15m',
        format: '%2.2f',
        sortorder: 80,
      },
      {
        id: 5,
        shortkey: 'pc24h',
        unit: 'in/24h',
        name: 'Precip. in 24h',
        format: '%2.1f',
        sortorder: 89,
      },
      {
        id: 6,
        shortkey: 'pc6h',
        unit: 'in/6h',
        name: 'Precip. in 6h',
        format: '%2.1f',
        sortorder: 83,
      },
      {
        id: 7,
        shortkey: 'pccum',
        unit: 'in/yr',
        name: 'Yearly Precip.',
        format: '%3.1f',
        sortorder: 93,
      },
      {
        id: 8,
        shortkey: 'stage',
        unit: 'ft',
        name: 'Feet Stage',
        format: '%3.2f',
        sortorder: 20,
      },
      {
        id: 9,
        shortkey: 'stage',
        unit: 'ft',
        name: 'Feet Stage',
        format: '%3.2f',
        sortorder: 20,
      },
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('gauge_reading_metrics', null, {});
  }
};
