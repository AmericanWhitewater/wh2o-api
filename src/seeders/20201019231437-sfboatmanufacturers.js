'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sfboatmanufacturers', [
      {
        name: 'Bliss-stick'
      },
      {
        name: 'Brudden'
      },
      {
        name: 'DAG'
      },
      {
        name: 'Dagger'
      },
      {
        name: 'DragoRossi'
      },
      {
        name: 'Drakkar'
      },
      {
        name: 'Drift Boat'
      },
      {
        name: 'Eskimo'
      },
      {
        name: 'Euro Kayaks'
      },
      {
        name: 'Fluid'
      },
      {
        name: 'Hox'
      },
      {
        name: 'Jackson Kayak'
      },
      {
        name: 'Liquid Logic'
      },
      {
        name: 'Massive Kayak'
      },
      {
        name: 'Mega Kayaks'
      },
      {
        name: 'Necky'
      },
      {
        name: 'Noah'
      },
      {
        name: 'Other'
      },
      {
        name: 'Perception'
      },
      {
        name: 'Prijon'
      },
      {
        name: 'Pyranha'
      },
      {
        name: 'Rainbow'
      },
      {
        name: 'Riot'
      },
      {
        name: 'Robson'
      },
      {
        name: 'Rotomod'
      },
      {
        name: 'Sanblas'
      },
      {
        name: 'Savage'
      },
      {
        name: 'TekSport'
      },
      {
        name: 'unknown'
      },
      {
        name: 'Villecourt'
      },
      {
        name: 'Wavesport'
      },
      {
        name: 'Zelezny'
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sfboatmanufacturers', null, {})
  }
}
