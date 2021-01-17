module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'accident_causes',
      {
        accidentId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        causeId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accident_causes');
  },
};