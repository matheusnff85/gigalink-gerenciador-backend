const Joi = require('joi');
const { Produto, Fornecedor } = require('../database/models');

const produtoSchema = Joi.object({
  nome: Joi.string().required().messages({
    'string.base': '422|"nome" must be a string',
    'any.required': '400|"nome" is required',
  }),
  descricao: Joi.string().required().messages({
    'string.base': '422|"descricao" must be a string',
    'any.required': '400|"descricao" is required',
  }),
  idFornecedor: Joi.number().integer().messages({
    'number.base': '422|"idFornecedor" must be a number',
    'number.integer': '422|"idFornecedor" must be a integer',
  }),
});

const validateNew = async (produtoObj) => {
  const schemaValidate = produtoSchema.validate(produtoObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const fornecedorExists = await Fornecedor.findByPk(produtoObj.idFornecedor);
  if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  return true;
};

const validateToUpdate = async (id, produtoObj) => {
  const schemaValidate = await validateNew(produtoObj);
  if (schemaValidate !== true) return schemaValidate;
  const produtoExists = await Produto.findByPk(id);
  if (!produtoExists) return { code: 404, message: 'Produto not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
