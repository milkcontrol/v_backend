'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'profiles',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        publicId: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        displayName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        genderType: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER('tiny'),
        },
        identityNumber: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        dateRelease: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        placeRelease: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        identityImageOne: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        identityImageTwo: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        identityImageThree: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        phoneNumber: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        birthday: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        isSearch: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
        shipAddressId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        billAddressId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        language: {
          allowNull: false,
          defaultValue: 'vi-VN',
          type: Sequelize.STRING,
        },
        avatar: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        height: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        width: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        bloodGroup: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        maritalStatus: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        education: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        job: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        interests: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        talent: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        protector: {
          allowNull: true,
          type: Sequelize.TINYINT,
        },
        parentId: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        favouriteCount: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        followCount: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        friendCount: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
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
            fields: ['publicId'],
          },
        ],
      }
    );
  },
  down(queryInterface) {
    return queryInterface.dropTable('profiles');
  },
};
