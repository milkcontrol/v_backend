'use strict';

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
        'protectors',
        [
          {
            id: 1,
            name: 'Cha',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Mẹ',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'Ông',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            name: 'Bà',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            name: 'Cô',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 6,
            name: 'Dì',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 7,
            name: 'Chú',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 8,
            name: 'Bác',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 9,
            name: 'Anh ruột',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 10,
            name: 'Chị ruột',
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
    await queryInterface.bulkDelete('protectors', null, {});
  }
};
