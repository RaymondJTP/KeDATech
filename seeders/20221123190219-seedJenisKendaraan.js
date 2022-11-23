'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('kendaraans', [
      {
        jenis: "motor",
        hargaPerJam: 2000,
        hargaPerHari: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis: "mobil",
        hargaPerJam: 5000,
        hargaPerHari: 80000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('kendaraans', null)
  }
};
