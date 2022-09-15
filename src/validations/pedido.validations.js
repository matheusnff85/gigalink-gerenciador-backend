const Joi = require('joi');
const { Pedido, Transportadora } = require('../database/models');

const pedidoSchema = Joi.object({
  notafiscal: Joi.string().required().messages({
    'string.base': '422|"notafiscal" must be a string',
    'any.required': '400|"notafiscal" is required',
  }),
  valorfrete: Joi.number().required().messages({
    'number.base': '422|"valorfrete" must be a number',
    'any.required': '400|"valorfrete" is required',
  }),
  desconto: Joi.number().required().messages({
    'number.base': '422|"desconto" must be a number',
    'any.required': '400|"desconto" is required',
  }),
  valortotal: Joi.number().required().messages({
    'number.base': '422|"valortotal" must be a number',
    'any.required': '400|"valortotal" is required',
  }),
  idTransportadora: Joi.number().integer().required().messages({
    'number.base': '422|"idTransportadora" must be a number',
    'number.integer': '422|"idTransportadora" must be a integer',
    'any.required': '400|"idTransportadora" is required',
  }),
});

const validateNew = async (pedidoObj) => {
  const schemaValidate = pedidoSchema.validate(pedidoObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const transportadoraExists = await Transportadora.findByPk(pedidoObj.idTransportadora);
  if (!transportadoraExists) return { code: 404, message: 'Transportadora not found' };
  return true;
};

const validateToUpdate = async (id, pedidoObj) => {
  const schemaValidate = await validateNew(pedidoObj);
  if (schemaValidate !== true) return schemaValidate;
  const pedidoExists = await Pedido.findByPk(id);
  if (!pedidoExists) return { code: 404, message: 'Pedido not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
