'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'countries',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
        },
        name: {
          allowNull: true,
          type: Sequelize.STRING(100),
        },
        iso2: {
          allowNull: false,
          type: Sequelize.STRING(2),
        },
        iso3: {
          allowNull: false,
          type: Sequelize.STRING(3),
        },
        numericCode: {
          allowNull: true,
          type: Sequelize.STRING(3),
        },
        phonecode: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        capital: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        currency: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        currencyName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        currencySymbol: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        tld: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        native: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        region: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        subregion: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        timezones: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        translations: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        latitude: {
          allowNull: false,
          type: Sequelize.DECIMAL(10, 8),
        },
        longitude: {
          allowNull: false,
          type: Sequelize.DECIMAL(11, 8),
        },
        emoji: {
          allowNull: false,
          type: Sequelize.STRING(191),
        },
        emojiU: {
          allowNull: false,
          type: Sequelize.STRING(191),
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
            fields: ['iso2'],
          },
          {
            unique: true,
            fields: ['iso3'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('countries');
  },
};
