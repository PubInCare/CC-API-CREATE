'use strict';
module.exports = {
  up:async (queryInterface, Sequelize)=> {
    await queryInterface.createTable('Perbaikans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_fasilitas: {
        type: Sequelize.STRING
      },
      jumlah_fasilitas: {
        type: Sequelize.STRING
      },
      kondisi_fasilitas: {
        type: Sequelize.STRING
      },
      penjelasan: {
        type: Sequelize.STRING
      },
      dokumentasi_bukti: {
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
  down:async (queryInterface, Sequelize)=> {
    await queryInterface.dropTable('Perbaikans');
  }
};