'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('profiles', 'bloodGroup', 'bloodTypeId');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('profiles', 'bloodTypeId', 'bloodGroup');
  },
};
