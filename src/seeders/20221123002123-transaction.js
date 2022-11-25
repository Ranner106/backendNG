'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Transactions',
      [
        {
          debitedAccountId: 2,
          creditedAccountId: 1,
          value: 2.0,
          createdAt: new Date('03/12/2022'),
        },
        {
          debitedAccountId: 1,
          creditedAccountId: 3,
          value: 2.0,
          createdAt: new Date('03/14/2022'),
        },
        {
          debitedAccountId: 1,
          creditedAccountId: 2,
          value: 10,
          createdAt: new Date('04/15/2022'),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  },
};
