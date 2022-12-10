'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'taxons',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        parentId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        position: {
          allowNull: true,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        permalink: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        taxonomyId: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        lft: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        rgt: {
          allowNull: true,
          type: Sequelize.BIGINT,
        },
        description: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        metaTitle: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        metaDescription: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        metaKeywords: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        depth: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        hideFromNav: {
          allowNull: true,
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        publicMetadata: {
          allowNull: true,
          type: Sequelize.JSON,
        },
        privateMetadata: {
          allowNull: true,
          type: Sequelize.JSON,
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
            fields: ['parentId'],
          },
          {
            unique: true,
            fields: ['taxonomyId'],
          },
        ],
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('taxons');
  },
};
