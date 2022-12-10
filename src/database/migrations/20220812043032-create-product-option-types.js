'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'product_option_types',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        position: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        productId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        optionTypeId: {
          allowNull: true,
          type: Sequelize.BIGINT,
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
            fields: ['optionTypeId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('product_option_types');
  },
};
