'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'verify_codes',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'uuid',
          },
        },
        code: {
          type: Sequelize.STRING(6),
        },
        verifyType: {
          type: Sequelize.INTEGER('tiny'),
        },
        isReject: {
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
      {
        indexes: [
          {
            fields: ['code'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('verify_codes');
  },
};
