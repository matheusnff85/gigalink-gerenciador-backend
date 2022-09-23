const Joi = require('joi');
const { Email, Fornecedor } = require('../database/models');

const emailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': '422|"email" must be a string',
    'string.email': '422|"email" must be a valid email',
    'any.required': '400|"email" is required',
  }),
  referencia: Joi.string().required().messages({
    'string.base': '422|"referencia" must be a string',
    'any.required': '400|"referencia" is required',
  }),
  idFornecedor: Joi.number().integer().messages({
    'number.base': '422|"idFornecedor" must be a number',
    'number.integer': '422|"idFornecedor" must be a integer',
  }),
});

const validateNew = async (emailObj) => {
  const schemaValidate = emailSchema.validate(emailObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  if (emailObj.idFornecedor) {
    const fornecedorExists = await Fornecedor.findByPk(emailObj.idFornecedor);
    if (!fornecedorExists) return { code: 404, message: 'Fornecedor not found' };
  }
  return true;
};

const validateToUpdate = async (id, emailObj) => {
  const schemaValidate = await validateNew(emailObj);
  if (schemaValidate !== true) return schemaValidate;
  const emailExists = await Email.findByPk(id);
  if (!emailExists) return { code: 404, message: 'Email not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
