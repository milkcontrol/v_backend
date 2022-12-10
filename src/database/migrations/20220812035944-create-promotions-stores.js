'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promotions_stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      promotionId: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      storeId: {
        allowNull: true,
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable('promotions_stores');
  },
};
