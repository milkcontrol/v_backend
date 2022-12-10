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
        'policies',
        [
          {
            content:
              'Privacy Policy for v-live At v-live.com, accessible from v-live.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by v-live.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.',
            policyType: 0,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            content:
              'Privacy Policy for v-live At v-live.com, accessible from v-live.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by v-live.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.',
            policyType: 1,
            status: 1,
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
    await queryInterface.bulkDelete('policies', null, {});
  },
};
