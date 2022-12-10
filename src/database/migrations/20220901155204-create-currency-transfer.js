'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('currency_transfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      from: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      to: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      transfer: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      received: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      locale: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      transfer_rate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('currency_transfers');
  },
};
