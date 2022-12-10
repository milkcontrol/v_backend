'use strict';

const crypto = require("crypto");
const bcrypt = require("bcryptjs");
module.exports = {
  async up (queryInterface, Sequelize) {
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
        'blood_types',
        [
          {
            id: 1,
            name: 'A+',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'A-',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'B+',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            name: 'B-',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            name: 'AB+',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 6,
            name: 'AB-',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 7,
            name: 'O+',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 8,
            name: 'O-',
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('blood_types', null, {});

  }
};
