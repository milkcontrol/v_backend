'use strict';
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'roles_suppliers',
        [
          {
            role: 1,
            name: 'Quan ly kho',
            description: 'Quan ly kho them sua xoa hang hoa trong kho.',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            role: 2,
            name: 'Truong kho',
            description: 'Kiem kho => nhap / xuat',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            role: 3,
            name: 'Giam doc',
            description: 'Nguoi chiu trach nhiem phap ly cua nha cung cap',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {transaction}
      );
      await queryInterface.bulkInsert(
        'suppliers',
        [
          {
            userId: 1,
            companyName: 'Company Name Demo 1',
            contactFirstName: 'contactFirstName Demo 1 ',
            contactLastName: 'contactLastName Demo 1',
            contactTitle: 'contactTitle Demo. 1',
            contactPhone: '0123123123',
            contactFax: '0123123123',
            website: 'vipT.com',
            contactEmail: 'vipT@gmail.com',
            headOfficeAddressId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 2,
            companyName: 'Company Name Demo 2',
            contactFirstName: 'contactFirstName Demo 2 ',
            contactLastName: 'contactLastName Demo 2',
            contactTitle: 'contactTitle Demo. 2',
            contactPhone: '0123123123',
            contactFax: '0123123123',
            website: 'vipT2.com',
            contactEmail: 'vipT2@gmail.com',
            headOfficeAddressId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 3,
            companyName: 'Company Name Demo 3',
            contactFirstName: 'contactFirstName Demo3 ',
            contactLastName: 'contactLastName Demo 3',
            contactTitle: 'contactTitle Demo. 3',
            contactPhone: '0123123123',
            contactFax: '0123123123',
            website: 'vipT3.com',
            contactEmail: 'vipT3@gmail.com',
            headOfficeAddressId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 4,
            companyName: 'Company Name Demo 4',
            contactFirstName: 'contactFirstName Demo 4 ',
            contactLastName: 'contactLastName Demo 14',
            contactTitle: 'contactTitle Demo. 4',
            contactPhone: '0123123123',
            contactFax: '0123123123',
            website: 'vipT4.com',
            contactEmail: 'vipT4@gmail.com',
            headOfficeAddressId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {transaction}
      );
      await queryInterface.bulkInsert(
        'stores_suppliers',
        [
          {
            supplierId: 1,
            storeId: 1,
            role: 1,
            description: 'supplierId 1 storeId 1 role 1',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            supplierId: 1,
            storeId: 2,
            role: 2,
            description: 'supplierId 1 storeId 2 role 2',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            supplierId: 1,
            storeId: 3,
            role: 3,
            description: 'supplierId 1 storeId 3 role 3',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {transaction}
      );
      await transaction.commit();
    } catch (err) {
      console.log('==== seeders user error: ', err);
      await transaction.rollback();
    }
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles_suppliers', null, {});
  },
};
