'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gauge_map', {
      source: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      source_id: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(75),
        allowNull: true
      },
      huc: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      update_frequency: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      county: {
        type: Sequelize.STRING(5),
        allowNull: true
      },
      glat: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      glon: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      update_start_time: {
        type: Sequelize.TIME,
        allowNull: true
      },
      header_updated: {
        type: Sequelize.DATE,
        allowNull: true
      },
      timezone: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      loc: {
        type: Sequelize.GEOMETRY,
        allowNull: true
      },
      data: {
        type: Sequelize.STRING,
        allowNull: true
      },
      update_calculated_frequency: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      clean_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gauge_map');
  }
};