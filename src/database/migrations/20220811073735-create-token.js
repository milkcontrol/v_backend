'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tokens', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
      },
      userId: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'users',
          key: 'uuid',
        },
      },
      isRevoked: {
        allowNull: false,
        defaultValue: false,
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('tokens');
  },
};
