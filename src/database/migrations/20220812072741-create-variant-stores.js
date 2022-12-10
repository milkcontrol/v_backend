'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'variant_stores',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        productId: {
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
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['productId'],
          },
          {
            unique: true,
            fields: ['storeId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('variant_stores');
  },
};
