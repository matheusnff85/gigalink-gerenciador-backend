const Joi = require('joi');
const { Fornecedor } = require('../database/models');

const fornecedorSchema = Joi.object({
  nome: Joi.string().required().messages({
    'string.base': '422|"nome" must be a string',
    'any.required': '400|"nome" is required',
  }),
  descricao: Joi.string().required().messages({
    'string.base': '422|"descricao" must be a string',
    'any.required': '400|"descricao" is required',
  }),
  cidade: Joi.string().required().messages({
    'string.base': '422|"cidade" must be a string',
    'any.required': '400|"cidade" is required',
  }),
  endereco: Joi.string().required().messages({
    'string.base': '422|"endereco" must be a string',
    'any.required': '400|"endereco" is required',
  }),
  bairro: Joi.string().required().messages({
    'string.base': '422|"bairro" must be a string',
    'any.required': '400|"bairro" is required',
  }),
  numero: Joi.number().integer().required().messages({
    'number.base': '422|"numero" must be a number',
    'number.integer': '422|"numero" must be a integer',
    'any.required': '400|"numero" is required',
  }),
});

const validateNew = (fornecedorObj) => {
  const schemaValidate = fornecedorSchema.validate(fornecedorObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  return true;
};

const validateToUpdate = async (id, fornecedorObj) => {
  const schemaValidate = fornecedorSchema.validate(fornecedorObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const fornecedorExists = await Fornecedor.findByPk(id);
  if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
