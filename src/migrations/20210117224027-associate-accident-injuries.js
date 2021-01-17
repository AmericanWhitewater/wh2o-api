module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'accident_injuries',
      {
        accidentId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        injuryId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accident_injuries');
  },
};