'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('profiles', 'isGoogle', {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.TINYINT
        }, { transaction: t }),
        queryInterface.addColumn('profiles', 'isFacebook', {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.TINYINT,
        }, { transaction: t })
      ]);
    });
  },
  down (queryInterface) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('profiles', 'isGoogle', { transaction: t }),
        queryInterface.removeColumn('profiles', 'isFacebook', { transaction: t })
      ]);
    });
  }
};
