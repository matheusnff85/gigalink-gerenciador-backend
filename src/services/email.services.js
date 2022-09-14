const { Email } = require('../database/models');

const getAll = async () => {
  const result = await Email.findAll();
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Email.findOne({ where: { id } });
  if (!result) return { code: 404, message: 'Fornecedor não encontrado' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  await Email.update(updatedInfos, { where: { id } });
  const updated = await Email.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const created = await Email.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Email.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
