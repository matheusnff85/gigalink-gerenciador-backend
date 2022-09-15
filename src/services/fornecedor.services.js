const { Email } = require('../database/models');
const { Fornecedor } = require('../database/models');
const { Telefone } = require('../database/models');
const { Produto } = require('../database/models');

const getAll = async () => {
  const result = await Fornecedor.findAll({
    include: [
      { model: Email, as: 'emails' },
      { model: Telefone, as: 'telefones' },
      { model: Produto, as: 'produtos' },
    ],
  });
  return { code: 200, data: result };
};

const getOne = async (id) => {
  const result = await Fornecedor.findOne({
    where: { id },
    include: [
      { model: Email, as: 'emails' },
      { model: Telefone, as: 'telefones' },
      { model: Produto, as: 'produtos' },
    ],
  });
  if (!result) return { code: 404, message: 'Not Found' };
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
