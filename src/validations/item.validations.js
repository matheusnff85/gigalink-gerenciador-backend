const Joi = require('joi');
const { Produto, Pedido, Item } = require('../database/models');

const itemSchema = Joi.object({
  quantidade: Joi.number().required().messages({
    'number.base': '422|"quantidade" must be a number',
    'any.required': '400|"quantidade" is required',
  }),
  valor: Joi.number().required().messages({
    'number.base': '422|"valor" must be a number',
    'any.required': '400|"valor" is required',
  }),
  idProduto: Joi.number().integer().required().messages({
    'number.base': '422|"idProduto" must be a number',
    'number.integer': '422|"idProduto" must be a integer',
    'any.required': '400|"idProduto" is required',
  }),
  idPedido: Joi.number().integer().required().messages({
    'number.base': '422|"idPedido" must be a number',
    'number.integer': '422|"idPedido" must be a integer',
    'any.required': '400|"idPedido" is required',
  }),
});

const validateNew = async (itemObj) => {
  const schemaValidate = itemSchema.validate(itemObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const produtoExists = await Produto.findByPk(itemObj.idProduto);
  if (!produtoExists) return { code: 404, message: 'Produto not found' };
  const pedidoExists = await Pedido.findByPk(itemObj.idPedido);
  if (!pedidoExists) return { code: 404, message: 'Pedido not found' };
  return true;
};

const validateToUpdate = async (id, itemObj) => {
  const schemaValidate = await validateNew(itemObj);
  if (schemaValidate !== true) return schemaValidate;
  const itemExists = await Item.findByPk(id);
  if (!itemExists) return { code: 404, message: 'Item not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
