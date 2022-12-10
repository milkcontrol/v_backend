'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('banks', 'name', 'specificBankId');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('banks', 'specificBankId', 'name');
  },
};
