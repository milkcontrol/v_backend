'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        uuid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.DataTypes.UUID,
        },
        profileId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          references: {
            model: 'profiles',
            key: 'id',
          },
        },
        streamKey: {
          allowNull: true,
          type: Sequelize.DataTypes.UUID,
        },
        username: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        role: {
          allowNull: false,
          type: Sequelize.INTEGER('tiny'),
        },
        isVerified: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.TINYINT(1),
          // 0 none - user moi tao.
          // 1 approved - user da duoc phe duyet
          // 2 pending - user cho duoc phe duyet.
          // 3 reject - user bi reject.
        },
        isBlocked: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
        isDelete: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false,
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
            fields: ['username'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
