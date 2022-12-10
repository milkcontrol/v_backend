'use strict';
const crypto = require('crypto');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

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
      const profile = await queryInterface.bulkInsert(
        'profiles',
        [
          {
            publicId: 'VN_admin',
            displayName: 'Supper Admin',
            firstName: 'Supper',
            lastName: 'Admin',
            genderTypeId: 1,
            phoneNumber: '+84 965.797.234',
            email: 'admin@v-live.vn',
            birthday: '2090-10-08 00:00:00.000000',
            isSearch: false,
            language: 'vi-VN',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {transaction}
      );

      const id = crypto.randomUUID({disableEntropyCache: true});
      const salt = bcrypt.genSaltSync(parseInt(process.env.HASH_SALT || 10));
      const password = bcrypt.hashSync('admin22V#live', salt);
      await queryInterface.bulkInsert(
        'users',
        [
          {
            uuid: id,
            profileId: profile,
            username: 'admin@vlive.com',
            password: password,
            role: 1,
            isVerified: 1,
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
    await queryInterface.bulkDelete('profiles', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
