'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'promotion_rules',
      {
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
        userId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        productGroupId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        type: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        code: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        preferences: {
          allowNull: true,
          type: Sequelize.TEXT,
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
            fields: ['promotionId'],
          },
          {
            unique: true,
            fields: ['userId'],
          },
          {
            unique: true,
            fields: ['productGroupId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('promotion_rules');
  },
};
