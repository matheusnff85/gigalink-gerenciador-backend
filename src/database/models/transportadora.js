module.exports = (sequelize, DataTypes) => {
  const Transportadora = sequelize.define('Transportadora', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Transportadoras',
  });

  Transportadora.associate = (models) => {
    Transportadora.hasMany(models.Pedido,
      { foreignKey: 'idTransportadora', as: 'pedidos' });
  };

  return Transportadora;
};