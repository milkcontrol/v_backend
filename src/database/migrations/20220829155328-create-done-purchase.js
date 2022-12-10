'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('done_purchase', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      extraData: {
        type: Sequelize.TEXT,
      },
      currency: {
        type: Sequelize.STRING,
      },
      platform: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('done_purchase');
  },
};
