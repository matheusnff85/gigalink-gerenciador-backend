module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Fornecedores',
      [{
        id: 1,
        nome: 'Fornecedor Um',
        descricao: 'fornece produtos alimenticios',
        cidade: 'Angra dos reis',
        endereco: 'Avenida angra principal',
        bairro: 'Centro',
        numero: 200,
      },
      {
        id: 2,
        nome: 'Fornecedor Dois',
        descricao: 'fornece produtos tecnologicos',
        cidade: 'Rio das Ostras',
        endereco: 'Rua das aguas claras',
        bairro: 'Vila nova',
        numero: 84,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Fornecedores', null, {});
  },
};