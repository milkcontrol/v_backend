'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cities',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
        },
        name: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        stateId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        stateCode: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        countryId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        countryCode: {
          allowNull: true,
          type: Sequelize.STRING(2),
        },
        latitude: {
          allowNull: false,
          type: Sequelize.DECIMAL(10, 8),
        },
        longitude: {
          allowNull: false,
          type: Sequelize.DECIMAL(11, 8),
        },
        flag: {
          allowNull: false,
          type: Sequelize.TINYINT(1),
        },
        wikiDataId: {
          allowNull: false,
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
    await queryInterface.dropTable('cities');
  },
};
