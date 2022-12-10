'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('policies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // 0- user
      // 1- userPdone
      // 2- supplier
      // 3- p done j
      // 4- p done A

      policyType: {
        allowNull: false,
        type: Sequelize.INTEGER('tiny'),
      },
      // 0- not used
      // 1- is being released
      // 2- draft
      status: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER('tiny'),
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Policies');
  }
};
