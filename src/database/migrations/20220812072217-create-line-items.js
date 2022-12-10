'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'line_items',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        varianvariantId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        orderId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        price: {
          allowNull: false,
          type: Sequelize.FLOAT,
        },
        currency: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        costPrice: {
          allowNull: true,
          type: Sequelize.FLOAT,
        },
        adjustmentTotal: {
          allowNull: true,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        promoTotal: {
          allowNull: true,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        publicMetadata: {
          allowNull: true,
          type: Sequelize.JSON,
        },
        privateMetadata: {
          allowNull: true,
          type: Sequelize.JSON,
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
            fields: ['variantId'],
          },
          {
            unique: true,
            fields: ['orderId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('line_items');
  },
};
