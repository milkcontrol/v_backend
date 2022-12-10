'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      districtId: {
        type: Sequelize.INTEGER
      },
      provinceId: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('districts');
  }
};
