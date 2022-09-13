module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Telefones',
      [{
        id: 1,
        ddd: '21',
        numero: '99955-5566',
        referencia: 'celular',
        idFornecedor: 1,
      },
      {
        id: 2,
        ddd: '21',
        numero: '2233-4455',
        referencia: 'fixo',
        idFornecedor: 1,
      },
      {
        id: 3,
        ddd: '22',
        numero: '98877-2233',
        referencia: 'celular',
        idFornecedor: 2,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Telefones', null, {});
  },
};