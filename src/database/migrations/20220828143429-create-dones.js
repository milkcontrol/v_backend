'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dones', {
      userId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      dones: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('dones');
  },
};
