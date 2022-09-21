const { Transportadora } = require('../database/models');
const { validateNew, validateToUpdate } = require('../validations/transportadora.validations');

const getAll = async () => {
  const result = await Transportadora.findAll({
    order: [
      ['id', 'ASC'],
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Transportadora.findOne({ where: { id } });
  if (!result) return { code: 404, message: 'Not Found' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  const validate = await validateToUpdate(id, updatedInfos);
  if (validate !== true) return validate;
  await Transportadora.update(updatedInfos, { where: { id } });
  const updated = await Transportadora.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const validate = await validateNew(newItem);
  if (validate !== true) return validate;
  const created = await Transportadora.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Transportadora.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
