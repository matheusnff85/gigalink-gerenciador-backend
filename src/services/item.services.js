const { Item } = require('../database/models');
const { Produto } = require('../database/models');
const { Pedido } = require('../database/models');
const { validateNew, validateToUpdate } = require('../validations/item.validations');

const getAll = async () => {
  const result = await Item.findAll({
    include: [
      { model: Produto, as: 'produtos' },
      { model: Pedido, as: 'pedidos' },
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Item.findOne({
    where: { id },
    include: [
      { model: Produto, as: 'produtos' },
      { model: Pedido, as: 'pedidos' },
    ],
  });
  if (!result) return { code: 404, message: 'Not Found' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  const validate = await validateToUpdate(id, updatedInfos);
  if (validate !== true) return validate;
  await Item.update(updatedInfos, { where: { id } });
  const updated = await Item.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const validate = await validateNew(newItem);
  if (validate !== true) return validate;
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
