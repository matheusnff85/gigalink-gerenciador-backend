module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    datahora: {
      type: DataTypes.DATE,
      get: function() {
        return this.getDataValue('datahora')
          .toLocaleString('en-GB', { timeZone: 'UTC' });
      },
      defaultValue: sequelize.fn('NOW'),
    },
    notafiscal: DataTypes.STRING,
    valorfrete: DataTypes.FLOAT,
    desconto: DataTypes.FLOAT,
    valortotal: DataTypes.FLOAT,
    idTransportadora: { type: DataTypes.INTEGER, foreignKey: true, allowNull: true },
  },
  {
    timestamps: false,
    tableName: 'Pedidos',
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Transportadora,
      { foreignKey: 'idTransportadora', as: 'transportadoras' });
    Pedido.hasMany(models.Item,
      { foreignKey: 'idPedido', as: 'items' });
  };

  return Pedido;
};