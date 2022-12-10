'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wardName: {
        type: Sequelize.STRING
      },
      wardCode: {
        type: Sequelize.STRING
      },
      districtId: {
        type: Sequelize.INTEGER
      },
      supportType: {
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
    await queryInterface.dropTable('wards');
  }
};
