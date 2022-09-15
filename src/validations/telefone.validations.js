const Joi = require('joi');
const { Telefone, Fornecedor } = require('../database/models');

const telefoneSchema = Joi.object({
  ddd: Joi.string().required().messages({
    'string.base': '422|"ddd" must be a string',
    'any.required': '400|"ddd" is required',
  }),
  numero: Joi.string().required().messages({
    'string.base': '422|"numero" must be a string',
    'any.required': '400|"numero" is required',
  }),
  referencia: Joi.string().required().messages({
    'string.base': '422|"referencia" must be a string',
    'any.required': '400|"referencia" is required',
  }),
  idFornecedor: Joi.number().integer().required().messages({
    'number.base': '422|"idFornecedor" must be a number',
    'number.integer': '422|"idFornecedor" must be a integer',
    'any.required': '400|"idFornecedor" is required',
  }),
});

const validateNew = async (telefoneObj) => {
  const schemaValidate = telefoneSchema.validate(telefoneObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const fornecedorExists = await Fornecedor.findByPk(telefoneObj.idFornecedor);
  if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  return true;
};

const validateToUpdate = async (id, telefoneObj) => {
  const schemaValidate = telefoneSchema.validate(telefoneObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const { idFornecedor } = telefoneObj;
  const telefoneExists = await Telefone.findByPk(id);
  if (!telefoneExists) return { code: 404, message: 'Telefone not found' };
  const fornecedorExists = await Fornecedor.findByPk(idFornecedor);
  if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
