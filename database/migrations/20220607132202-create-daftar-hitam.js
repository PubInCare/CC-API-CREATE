'use strict';
module.exports = {
  up: async (queryInterface, Sequelize)=> {
    await queryInterface.createTable('DaftarHitams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tokenAuth: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize)=> {
    await queryInterface.dropTable('DaftarHitams');
  }
};