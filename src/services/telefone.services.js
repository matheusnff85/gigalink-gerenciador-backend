const { Telefone } = require('../database/models');
const { Fornecedor } = require('../database/models');
const { validateNew, validateToUpdate } = require('../validations/telefone.validations');

const getAll = async () => {
  const result = await Telefone.findAll({
    include: [
      { model: Fornecedor, as: 'fornecedores' },
    ],
    order: [
      ['id', 'ASC'],
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Telefone.findOne({
    where: { id },
    include: [
      { model: Fornecedor, as: 'fornecedores' },
    ],
  });
  if (!result) return { code: 404, message: 'Not Found' };
  return { code: 200, data: result };
};

const update = async (id, updatedInfos) => {
  const validate = await validateToUpdate(id, updatedInfos);
  if (validate !== true) return validate;
  await Telefone.update(updatedInfos, { where: { id } });
  const updated = await Telefone.findByPk(id);
  return { code: 200, data: updated };
};

const create = async (newItem) => {
  const validate = await validateNew(newItem);
  if (validate !== true) return validate;
  const created = await Telefone.create(newItem);
  return { code: 201, data: created };
};

const remove = async (id) => {
  await Telefone.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = {
  getAll, getOne, remove, create, update,
};
