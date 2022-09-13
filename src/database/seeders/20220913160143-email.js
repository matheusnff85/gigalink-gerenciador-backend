module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Emails',
      [{
        id: 1,
        email: 'fornecedor1email1@gmail.com',
        referencia: 'referencia1',
        idFornecedor: 1,
      },
      {
        id: 2,
        email: 'fornecedor2email1@hotmail.com',
        referencia: 'referencia2',
        idFornecedor: 2,
      },
      {
        id: 3,
        email: 'fornecedor2email2@gmail.com',
        referencia: 'referencia3',
        idFornecedor: 2,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Emails', null, {});
  },
};