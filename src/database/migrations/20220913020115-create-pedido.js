'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datahora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      notafiscal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valorfrete: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      desconto: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      valortotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      idTransportadora: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Transportadoras',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};