const { Item } = require('../database/models');

const getAll = async () => {
  const result = await Item.findAll();
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Item.findOne({ where: { id } });
  if (!result) return { code: 404, message: 'Not Found' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  await Item.update(updatedInfos, { where: { id } });
  const updated = await Item.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const created = await Item.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Item.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
