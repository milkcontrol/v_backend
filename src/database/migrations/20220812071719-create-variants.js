'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'variants',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        sku: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '',
        },
        SupplierProductID: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '',
        },
        weight: {
          allowNull: true,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        height: {
          allowNull: true,
          type: Sequelize.FLOAT,
        },
        width: {
          allowNull: true,
          type: Sequelize.FLOAT,
        },
        depth: {
          allowNull: true,
          type: Sequelize.FLOAT,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        isMaster: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        productId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        costPrice: {
          allowNull: true,
          type: Sequelize.FLOAT,
        },
        position: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        costCurrency: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        trackInventory: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 1,
        },
        discontinueOn: {
          allowNull: true,
          type: Sequelize.DATE,
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
            fields: ['productId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('variants');
  },
};
