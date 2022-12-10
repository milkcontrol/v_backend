'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.renameColumn('profiles', 'genderType', 'genderTypeId',{transaction: t}),
        queryInterface.renameColumn('profiles', 'protector', 'protectorId',{transaction: t}),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.renameColumn('profiles', 'genderTypeId', 'genderType',{transaction: t}),
        queryInterface.renameColumn('profiles', 'protectorId', 'protector',{transaction: t}),
      ]);
    });
  },
};
