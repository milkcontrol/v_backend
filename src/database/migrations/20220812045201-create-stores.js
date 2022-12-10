'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'stores',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        supplierId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        name: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        url: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        metaDescription: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        metaKeywords: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        mailFromAddress: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        code: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        default: {
          allowNull: false,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        defaultLocale: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        customerSupportEmail: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        stockLocationId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        contactPhone: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        newOrderNotificationsEmail: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        checkoutZoneId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        settings: {
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
            fields: ['supplierId'],
          },
          {
            unique: true,
            fields: ['stockLocationId'],
          },
          {
            unique: true,
            fields: ['checkoutZoneId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('stores');
  },
};
