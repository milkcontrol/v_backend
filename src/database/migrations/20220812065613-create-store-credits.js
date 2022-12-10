'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'store_credits',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        categoryId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        createdById: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        amount: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        amountUsed: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        memo: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        currency: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        amountAuthorized: {
          allowNull: false,
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
        originatorId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        originatorType: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        typeId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        storeId: {
          allowNull: true,
          type: Sequelize.BIGINT,
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
            fields: ['categoryId'],
          },
          {
            unique: true,
            fields: ['createdById'],
          },
          {
            unique: true,
            fields: ['originatorId'],
          },
          {
            unique: true,
            fields: ['typeId'],
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
    await queryInterface.dropTable('store_credits');
  },
};
