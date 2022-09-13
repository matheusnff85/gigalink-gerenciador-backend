module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Produtos',
      [{
        id: 1,
        nome: 'Limao',
        descricao: 'fruta',
        idFornecedor: 1,
      },
      {
        id: 2,
        nome: 'Maça',
        descricao: 'fruta',
        idFornecedor: 1,
      },
      {
        id: 3,
        nome: 'Alface',
        descricao: 'vegetal',
        idFornecedor: 1,
      },
      {
        id: 4,
        nome: 'Camera digital nikon 654s',
        descricao: 'camera fotografica',
        idFornecedor: 2
        ,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Produtos', null, {});
  },
};