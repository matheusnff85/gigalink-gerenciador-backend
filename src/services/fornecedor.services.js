const {
  Fornecedor, Email, Telefone, Produto,
} = require('../database/models');

const getAll = async () => {
  const result = await Fornecedor.findAll({
    include: [
      { model: Email, as: 'emails', through: { attributes: [] } },
      { model: Telefone, as: 'telefones', through: { attributes: [] } },
      { model: Produto, as: 'produtos', through: { attributes: [] } },
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Fornecedor.findOne({
    where: { id },
    include: [
      { model: Email, as: 'emails', through: { attributes: [] } },
      { model: Telefone, as: 'telefones', through: { attributes: [] } },
      { model: Produto, as: 'produtos', through: { attributes: [] } },
    ],
  });
  if (!result) return { code: 404, message: 'Fornecedor não encontrado' };
  return { code: 200, data: result };
};

const create = async (newFornecedor) => {
  const newItem = await Fornecedor.create(newFornecedor);
  return { code: 201, data: newItem };
};

const remove = async (id) => {
  await Fornecedor.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create,
};
