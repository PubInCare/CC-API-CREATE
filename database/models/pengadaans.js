'use strict'
module.exports = (sequelize, Sequelize) => {
  const Pengadaans = sequelize.define ("Pengadaans",{
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nama_fasilitas: {
          type: Sequelize.STRING
        },
        jumlah_fasilitas: {
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
  },
  {
      tableName: "Pengadaans",
  });
  
  return Pengadaans;

}