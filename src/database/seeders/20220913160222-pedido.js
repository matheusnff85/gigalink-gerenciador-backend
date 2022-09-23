module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Pedidos',
      [{
        id: 1,
        datahora: new Date('2022-08-11T17:33:00.000Z'),
        notafiscal: 'NF20220811',
        valorfrete: 5,
        desconto: 2.5,
        valortotal: 18,
        idTransportadora: 1,
      },
      {
        id: 2,
        datahora: new Date('2021-05-04T13:45:00.000Z'),
        notafiscal: 'NF20210504',
        valorfrete: 45.9,
        desconto: 50,
        valortotal: 534.3,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Pedidos', null, {});
  },
};