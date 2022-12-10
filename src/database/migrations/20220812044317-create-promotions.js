'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'promotions',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        expiresAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        startsAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        name: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        type: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        usageLimit: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        matchPolicy: {
          allowNull: true,
          type: Sequelize.STRING,
          defaultValue: 'all',
        },
        code: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        advertise: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        path: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        promotionCategoryId: {
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
            fields: ['promotionCategoryId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('promotions');
  },
};
