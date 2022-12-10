'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('option_types', {
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
        allowNull: true,
        type: Sequelize.STRING,
      },
      position: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      filterable: {
        allowNull: false,
        type: Sequelize.TINYINT,
        defaultValue: 1,
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('option_types');
  },
};
