const telefoneServices = require('../services/telefone.services');

const getAll = async (_req, res) => {
  try {
    const result = await telefoneServices.getAll();
    if ('message' in result) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(result.code).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await telefoneServices.getOne(id);
    if ('message' in result) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(result.code).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await telefoneServices.update(id, req.body);
    if ('message' in result) {
      return res.status(Number(result.code)).json({ message: result.message });
    }
    return res.status(result.code).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const result = await telefoneServices.create(req.body);
    if ('message' in result) {
      return res.status(Number(result.code)).json({ message: result.message });
    }
    return res.status(result.code).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await telefoneServices.remove(id);
    if ('message' in result) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(result.code).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll, getOne, remove, create, update,
};
