'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Channels', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        otherName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        lastMessageId: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        owner: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        isDelete: {
          allowNull: false,
          default: false,
          type: Sequelize.BOOLEAN,
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
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Channels');
  },
};
