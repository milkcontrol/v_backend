'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'properties',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        presentation: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        filterable: {
          allowNull: false,
          type: Sequelize.TINYINT,
        },
        filterParam: {
          allowNull: true,
          type: Sequelize.STRING,
          defaultValue: 0,
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
            fields: ['promotionId'],
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
    await queryInterface.dropTable('properties');
  },
};
