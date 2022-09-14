const {
  Produto, Fornecedor,
} = require('../database/models');

const getAll = async () => {
  const result = await Produto.findAll({
    include: [
      { model: Fornecedor, as: 'fornecedor', through: { attributes: [] } },
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Produto.findOne({
    where: { id },
    include: [
      { model: Fornecedor, as: 'fornecedor', through: { attributes: [] } },
    ],
  });
  if (!result) return { code: 404, message: 'Not Found' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  await Produto.update(updatedInfos, { where: { id } });
  const updated = await Produto.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const created = await Produto.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Produto.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
