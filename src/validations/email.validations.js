const Joi = require('joi');
const { Email, Fornecedor } = require('../database/models');

const emailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': '400|"email" must be a valid email',
    'any.required': '400|"email" is required',
  }),
  referencia: Joi.string().required().messages({
    'any.required': '400|"referencia" is required',
  }),
  idFornecedor: Joi.number().integer().required().messages({
    'number.base': '422|"idFornecedor" must be a number',
    'number.integer': '422|"idFornecedor" must be a integer',
    'any.required': '400|"idFornecedor" is required',
  }),
});

const validateNew = async (emailObj) => {
  const schemaValidate = emailSchema.validate(emailObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const fornecedorExists = await Fornecedor.findByPk(emailObj.idFornecedor);
  if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  return true;
};

const validateToUpdate = async (id, emailObj) => {
  const schemaValidate = emailSchema.validate(emailObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  const { idFornecedor } = emailObj;
  const emailExists = await Email.findByPk(id);
  if (!emailExists) return { code: 404, message: 'Email not found' };
  const fornecedorExists = await Fornecedor.findByPk(idFornecedor);
  if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
