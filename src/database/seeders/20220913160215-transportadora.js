module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Transportadoras',
      [{
        id: 1,
        nome: 'Lewis Transportes',
      },
      {
        id: 2,
        nome: 'Feedex',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Transportadoras', null, {});
  },
};