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
      // define association here
    }
  };
  parkir.init({
    plat: DataTypes.STRING,
    jenis: DataTypes.INTEGER,
    waktuMasuk: DataTypes.DATE,
    waktuKeluar: DataTypes.DATE,
    biayaParkir: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'parkir',
  });
  return parkir;
};