'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('banks', 'specificBankId', {
      type: Sequelize.BIGINT,
      allowNull: false,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('banks', 'specificBankId', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
