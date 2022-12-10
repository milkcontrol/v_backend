'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('tokens', 'refreshToken', {
      allowNull: true,
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('tokens', 'refreshToken');
  },
};
