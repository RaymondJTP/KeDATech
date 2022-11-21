'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parkirs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plat: {
        type: Sequelize.STRING
      },
      jenis: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'kendaraans'
          },
          key : 'id'
        },
        onUpdate : 'cascade',
        onDelete : 'cascade'
      },
      waktuMasuk: {
        type: Sequelize.DATE
      },
      waktuKeluar: {
        type: Sequelize.DATE
      },
      biayaParkir: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('parkirs');
  }
};