module.exports = (sequelize, DataTypes) => {
  const Perbaikans = sequelize.define ("Perbaikans",{
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nama_fasilitas: {
          type: DataTypes.STRING
        },
        jumlah_fasilitas: {
          type: DataTypes.STRING
        },
        kondisi_fasilitas: {
          type: DataTypes.STRING
        },
        penjelasan: {
          type: DataTypes.STRING
        },
        dokumentasi_bukti: {
          type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }           
  },
  {
      tableName: "perbaikans",
  });
  
  return Perbaikans;

}