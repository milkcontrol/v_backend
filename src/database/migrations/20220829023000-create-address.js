'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId: {
        allowNull: true,
        type: Sequelize.BIGINT,
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
      countryId: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};
