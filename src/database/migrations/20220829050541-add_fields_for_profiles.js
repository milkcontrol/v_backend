'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('profiles', 'birthPlaceAddressId', {
          type: Sequelize.BIGINT
        }, { transaction: t }),
        queryInterface.addColumn('profiles', 'currentAddressId', {
          type: Sequelize.BIGINT,
        }, { transaction: t })
      ]);
    });
  },
  down (queryInterface) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('profiles', 'birthPlaceAddressId', { transaction: t }),
        queryInterface.removeColumn('profiles', 'currentAddress', { transaction: t })
      ]);
    });
  }
};
