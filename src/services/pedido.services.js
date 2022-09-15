const { Pedido } = require('../database/models');
const { Transportadora } = require('../database/models');

const getAll = async () => {
  const result = await Pedido.findAll({
    include: [
      { model: Transportadora, as: 'transportadoras' },
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Pedido.findOne({
    where: { id },
    include: [
      { model: Transportadora, as: 'transportadoras' },
    ],
  });
  if (!result) return { code: 404, message: 'Not Found' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  await Pedido.update(updatedInfos, { where: { id } });
  const updated = await Pedido.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const created = await Pedido.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Pedido.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
