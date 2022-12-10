'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coins_transfer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      senderId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      receiverId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      coins: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('coins_transfer');
  },
};
