'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'product_properties',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        value: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        productId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        propertyId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        position: {
          allowNull: true,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        showProperty: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 1,
        },
        filterParam: {
          allowNull: true,
          type: Sequelize.STRING,
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
            fields: ['propertyId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('product_properties');
  },
};
