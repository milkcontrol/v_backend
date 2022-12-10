'use strict';
module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.addColumn('profiles', 'stripeCustomerId', {
      allowNull: true,
      type: Sequelize.STRING
    })
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('profiles', 'stripeCustomerId').then(function () {
    });
  }
}
