module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    datahora: DataTypes.DATE,
    notafiscal: DataTypes.STRING,
    valorfrete: DataTypes.FLOAT,
    desconto: DataTypes.FLOAT,
    valortotal: DataTypes.FLOAT,
    idTransportadora: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Pedidos',
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Transportadora,
      { foreignKey: 'idTransportadora', as: 'transportadora' });
    Pedido.hasMany(models.Item,
      { foreignKey: 'idPedido', as: 'item' });
  };

  return Pedido;
};