'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        channelId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        message: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        type: {
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
    await queryInterface.dropTable('Messages');
  },
};
