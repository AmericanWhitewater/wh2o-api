module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'accident_factors',
      {
        accidentId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        factorId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accident_factors');
  },
};