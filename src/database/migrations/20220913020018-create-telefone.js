'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Telefones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ddd: {
        type: Sequelize.NUMBER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Telefones');
  }
};