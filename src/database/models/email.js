module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    referencia: DataTypes.STRING,
    idFornecedor: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Emails',
  });

  Email.associate = (models) => {
    Email.belongsTo(models.Fornecedor,
      { foreignKey: 'idFornecedor', as: 'fornecedores' });
  };

  return Email;
};