'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('currency_rates', {
      location: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      rate: {
        allowNull: false,
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
  async down(queryInterface) {
    await queryInterface.dropTable('currency_rates');
  }
};
