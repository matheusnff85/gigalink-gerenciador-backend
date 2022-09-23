module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Items',
      [{
        id: 1,
        quantidade: 5,
        valor: 15.5,
        idProduto: 1,
        idPedido: 1,
      },
      {
        id: 2,
        quantidade: 10,
        valor: 34.5,
        idProduto: 2,
        idPedido: 2,
      },
      {
        id: 3,
        quantidade: 1,
        valor: 499.90,
        idPedido: 2,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};