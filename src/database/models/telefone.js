module.exports = (sequelize, DataTypes) => {
  const Telefone = sequelize.define('Telefone', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ddd: DataTypes.STRING,
    numero: DataTypes.STRING,
    referencia: DataTypes.STRING,
    idFornecedor: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Telefones',
  });

  Telefone.associate = (models) => {
    Telefone.belongsTo(models.Fornecedor,
      { foreignKey: 'idFornecedor', as: 'fornecedores' });
  };

  return Telefone;
};