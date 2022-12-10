'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      requestId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      amount: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      coins: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      isPartner: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      extraData: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      requestType: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      platform: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderInfo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('payments');
  },
};
