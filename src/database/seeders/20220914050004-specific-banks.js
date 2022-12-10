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
        'specific_banks',
        [
          {
            id: 1,
            name: 'Đầu tư và Phát triển Việt Nam',
            branchName: 'BIDV',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Công thương Việt Nam',
            branchName: 'VietinBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'Ngoại Thương Việt Nam',
            branchName: 'Vietcombank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            name: 'Việt Nam Thịnh Vượng',
            branchName: 'V',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            name: 'Quân Đội',
            branchName: 'MB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 6,
            name: 'Kỹ Thương',
            branchName: 'Techcombank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 7,
            name: 'NN&PT Nông thôn Việt Nam',
            branchName: 'Agribank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 8,
            name: 'Á Châu',
            branchName: 'ACB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 9,
            name: 'Phát triển Thành phố Hồ Chí Minh',
            branchName: 'HDBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 10,
            name: 'Sài Gòn – Hà Nội',
            branchName: 'SHB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 11,
            name: 'Sài Gòn Thương Tín',
            branchName: 'Sacombank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 12,
            name: 'Chính sách xã hội Việt Nam',
            branchName: 'VBSP',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 13,
            name: 'Quốc Tế',
            branchName: 'VIB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 14,
            name: 'Hàng Hải',
            branchName: 'MSB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 15,
            name: 'Sài Gòn',
            branchName: 'SCB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 16,
            name: 'Phát triển Việt Nam',
            branchName: 'VDB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 17,
            name: 'Đông Nam Á',
            branchName: 'SeABank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 18,
            name: 'Phương Đông',
            branchName: 'OCB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 19,
            name: 'Xuất Nhập Khẩu',
            branchName: 'Eximbank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 20,
            name: 'Bưu điện Liên Việt',
            branchName: 'LienVietPostBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 21,
            name: 'Tiên Phong',
            branchName: 'TPBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 22,
            name: 'Đại Chúng Việt Nam',
            branchName: 'PVcomBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 23,
            name: 'Woori Việt Nam',
            branchName: 'Woori',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 24,
            name: 'Bắc Á',
            branchName: 'Bac A Bank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 25,
            name: 'HSBC Việt Nam',
            branchName: 'HSBC',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 26,
            name: 'Standard Chartered Việt Nam',
            branchName: 'SCBVL',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 27,
            name: 'Public Bank Việt Nam',
            branchName: 'PBVN',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 28,
            name: 'An Bình',
            branchName: 'ABBANK',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 29,
            name: 'Shinhan Việt Nam',
            branchName: 'SHBVN',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 30,
            name: 'Việt Á',
            branchName: 'VietABank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 31,
            name: 'Đông Á',
            branchName: 'DongA Bank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 32,
            name: 'UOB Việt Nam',
            branchName: 'UOB\t',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 33,
            name: 'Việt Nam Thương Tín',
            branchName: 'Vietbank\t',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 34,
            name: 'Nam Á',
            branchName: 'Nam A Bank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 35,
            name: 'Quốc dân',
            branchName: 'NCB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 36,
            name: 'Đại Dương',
            branchName: 'OceanBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 37,
            name: 'CIMB Việt Nam',
            branchName: 'CIMB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 38,
            name: 'Bản Việt',
            branchName: 'Viet Capital Bank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 39,
            name: 'Kiên Long',
            branchName: 'Kienlongbank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 40,
            name: 'Indovina',
            branchName: 'IVB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 41,
            name: 'Bảo Việt',
            branchName: 'BAOVIET Bank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 42,
            name: 'Sài Gòn Công Thương',
            branchName: 'SAIGONBANK',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 43,
            name: 'Hợp tác xã Việt Nam',
            branchName: 'Co-opBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 44,
            name: 'Dầu khí toàn cầu',
            branchName: 'GPBank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 45,
            name: 'Liên doanh Việt Nga',
            branchName: 'VRB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 46,
            name: 'Xây dựng',
            branchName: 'CB',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 47,
            name: 'Xăng dầu Petrolimex',
            branchName: 'PG Bank',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 48,
            name: 'ANZ Việt Nam',
            branchName: 'ANZVL',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 49,
            name: 'Hong Leong Việt Nam',
            branchName: 'HLBVN',
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
    await queryInterface.bulkDelete('specific_banks', null, {});
  }
};
