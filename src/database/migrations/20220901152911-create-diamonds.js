'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('diamonds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.STRING,
      },
      diamonds: {
        type: Sequelize.INTEGER,
      },
      locale: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('diamonds');
  },
};
