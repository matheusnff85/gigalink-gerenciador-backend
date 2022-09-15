const Joi = require('joi');
const { Transportadora } = require('../database/models');

const transportadoraSchema = Joi.object({
  nome: Joi.string().required().messages({
    'string.base': '422|"nome" must be a string',
    'any.required': '400|"nome" is required',
  }),
});

const validateNew = (transportadoraObj) => {
  const schemaValidate = transportadoraSchema.validate(transportadoraObj);
  if ('error' in schemaValidate) {
    const [code, message] = schemaValidate.error.details[0].message.split('|');
    return { code, message };
  }
  return true;
};

const validateToUpdate = async (id, transportadoraObj) => {
  const schemaValidate = validateNew(transportadoraObj);
  if (schemaValidate !== true) return schemaValidate;
  const transportadoraExists = await Transportadora.findByPk(id);
  if (!transportadoraExists) return { code: 404, message: 'Transportadora not found' };
  return true;
};

module.exports = { validateNew, validateToUpdate };
