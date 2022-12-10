'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores_suppliers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      supplierId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Suppliers',
        //   key: 'id',
        // },
      },
      storeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Stores',
        //   key: 'id',
        // },
      },
      role: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Roles_suppliers_stores',
        //   key: 'role',
        // },
      },
      description: {
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
    await queryInterface.dropTable('stores_suppliers');
  },
};
