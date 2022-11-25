'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'José Alves',
          password: 'Usuarionovo2000',
          accountId: 1,
        },
        {
          username: 'Maria do Nascimento',
          password: 'Novotrabalhador4000',
          accountId: 2,
        },
        {
          username: 'Carlos Francisco',
          password: 'Novofuncionario2456',
          accountId: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
