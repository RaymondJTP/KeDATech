'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parkir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      parkir.belongsTo(models.kendaraan, {foreignKey : 'jenis'})
    }
  };
  parkir.init({
    plat: DataTypes.STRING,
    jenis: DataTypes.INTEGER,
    waktuMasuk: {
      type : DataTypes.DATE,
      validate : {
        isDate: { msg: "Masukkan waktu dengan format YYYY/MM/DD HH:MM:SS seperti 2022/09/17 06:00:00"},
       
      } 
    },
    waktuKeluar: {
      type : DataTypes.DATE,
      validate : {
        isDate: { msg: "Masukkan waktu dengan format YYYY/MM/DD HH:MM:SS seperti 2022/09/17 06:00:00"},
       
      } 
    },
    biayaParkir: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'parkir',
  });
  return parkir;
};