'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('policies', 'content', {
      allowNull: false,
      type: Sequelize.STRING(1000),
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('policies', 'content', {
      allowNull: false,
      type: Sequelize.STRING,
    });
  },
};
