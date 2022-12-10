'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tokenId: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'tokens',
          key: 'uuid',
        },
      },
      userAgent: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      ipAddress: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      ipAddressV6: {
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('log_tokens');
  },
};
