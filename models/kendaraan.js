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
    jenis: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Isi jenis kendaraan"},
        notNull : {msg : "Isi jenis kendaraan"}
      }
    },
    hargaPerJam: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty : {msg : "Isi harga per jam untuk tipe kendaraan yang dimasukkan"},
        notNull : {msg : "Isi harga per jam untuk tipe kendaraan yang dimasukkan"}
      }
    },
    hargaPerHari : {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty : {msg : "Isi harga per jam untuk tipe kendaraan yang dimasukkan"},
        notNull : {msg : "Isi harga per jam untuk tipe kendaraan yang dimasukkan"}
      }
    }
  }, {
    sequelize,
    modelName: 'kendaraan',
  });
  return kendaraan;
};