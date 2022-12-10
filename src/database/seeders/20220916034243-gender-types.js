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
        'gender_types',
        [
          {
            id: 1,
            name: 'Nam',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Nữ',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'Khác',
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
    await queryInterface.bulkDelete('gender_types', null, {});
  }
};
