module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantidade: DataTypes.FLOAT,
    valor: DataTypes.FLOAT,
    idProduto: { type: DataTypes.INTEGER, foreignKey: true },
    idPedido: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Items',
  });

  Item.associate = (models) => {
    Item.belongsTo(models.Produto,
      { foreignKey: 'idProduto', as: 'produto' });
    Item.belongsTo(models.Pedido,
      { foreignKey: 'idPedido', as: 'pedido' });
  };

  return Item;
};