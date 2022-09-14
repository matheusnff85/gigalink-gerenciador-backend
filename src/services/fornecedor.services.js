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

const update = async (id, updatedInfos) => {
  await Fornecedor.update(updatedInfos, { where: { id } });
  const updated = await Fornecedor.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const created = await Fornecedor.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Fornecedor.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
