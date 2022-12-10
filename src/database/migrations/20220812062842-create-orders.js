'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'orders',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        number: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        itemTotal: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        total: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        state: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        adjustmentTotal: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        userId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        completedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        billAddress: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        shipAddress: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        paymentTotal: {
          allowNull: true,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        shipmentState: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        paymentState: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        specialInstructions: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        currency: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        lastIpAddress: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        createdById: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        shipmentTotal: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        additionalTaxTotal: {
          allowNull: true,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        promoTotal: {
          allowNull: true,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        channel: {
          allowNull: true,
          type: Sequelize.STRING,
          defaultValue: 'spree',
        },
        includedTaxTotal: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        itemCount: {
          allowNull: true,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        approverId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        approvedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        confirmationDelivered: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        consideredRisky: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        token: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        canceledAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        cancelerId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        storeId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        stateLockVersion: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        taxableAdjustmentTotal: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        nonTaxableAdjustmentTotal: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        storeOwnerNotificationDelivered: {
          allowNull: true,
          type: Sequelize.TINYINT,
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
            fields: ['userId'],
          },
          {
            unique: true,
            fields: ['createdById'],
          },
          {
            unique: true,
            fields: ['approverId'],
          },
          {
            unique: true,
            fields: ['cancelerId'],
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
    await queryInterface.dropTable('orders');
  },
};
