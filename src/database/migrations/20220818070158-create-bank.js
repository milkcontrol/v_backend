'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'banks',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        name: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        accountNumber: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        owner: {
          allowNull: true,
          type: Sequelize.STRING,
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
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['userId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('banks');
  },
};
