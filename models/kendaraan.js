'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class kendaraan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  kendaraan.init({
    jenis: DataTypes.STRING,
    hargaPerJam: DataTypes.INTEGER,
    hargaPerHari : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kendaraan',
  });
  return kendaraan;
};