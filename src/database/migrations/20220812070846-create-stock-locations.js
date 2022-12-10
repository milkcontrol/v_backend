'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'stock_locations',
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
        default: {
          allowNull: false,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        address1: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        address2: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        cityId: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        stateId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        stateName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        countryId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        zipcode: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        phone: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        active: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 1,
        },
        backorderableDefault: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        propagateAllVariants: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 1,
        },
        adminName: {
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
            fields: ['cityId'],
          },
          {
            unique: true,
            fields: ['stateId'],
          },
          {
            unique: true,
            fields: ['countryId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('stock_locations');
  },
};
