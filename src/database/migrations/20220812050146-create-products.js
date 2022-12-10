'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'products',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '',
        },
        description: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        availableOn: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        slug: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        metaDescription: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        metaKeywords: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        shippingCategoryId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        promotionable: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 1,
        },
        metaTitle: {
          allowNull: true,
          type: Sequelize.STRING,
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
            fields: ['shippingCategoryId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
