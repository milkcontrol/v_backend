'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'userType', {
      defaultValue: 0,
      type: Sequelize.INTEGER('tiny'),
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'userType');
  },
};
