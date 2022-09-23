module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    idFornecedor: { type: DataTypes.INTEGER, foreignKey: true, allowNull: true, },
  },
  {
    timestamps: false,
    tableName: 'Produtos',
  });

  Produto.associate = (models) => {
    Produto.belongsTo(models.Fornecedor,
      { foreignKey: 'idFornecedor', as: 'fornecedores' });
    Produto.hasMany(models.Item,
      { foreignKey: 'idProduto', as: 'items' });
  };

  return Produto;
};