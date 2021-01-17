module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'accident_causes',
      {
        accident_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        cause_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('accident_causes');
  },
};