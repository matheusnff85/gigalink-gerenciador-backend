module.exports = (sequelize, DataTypes) => {
  const Fornecedor = sequelize.define('Fornecedor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    cidade: DataTypes.STRING,
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Fornecedores',
  });

  Fornecedor.associate = (models) => {
    Fornecedor.hasMany(models.Email,
      { foreignKey: 'idFornecedor', as: 'email' });
    Fornecedor.hasMany(models.Telefone,
      { foreignKey: 'idFornecedor', as: 'telefone'});
    Fornecedor.hasMany(models.Produto,
      { foreignKey: 'idFornecedor', as: 'produto'});
  };

  return Fornecedor;
};