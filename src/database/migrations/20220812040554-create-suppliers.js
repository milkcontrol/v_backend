'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'suppliers',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          // references: {
          //   model: 'Users',
          //   key: 'id',
          // },
        },
        companyName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        contactFirstName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        contactLastName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        contactTitle: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        contactPhone: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        contactFax: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        contactEmail: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        website: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        headOfficeAddressId: {
          allowNull: true,
          type: Sequelize.BIGINT,
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
            fields: ['headOfficeAddressId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('suppliers');
  },
};
