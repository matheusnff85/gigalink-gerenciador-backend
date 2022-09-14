const produtoServices = require('../services/produto.services');

const getAll = async (_req, res) => {
  try {
    const result = await produtoServices.getAll();
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
    const result = await produtoServices.getOne(id);
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
    const result = await produtoServices.update(id, req.body);
    if ('message' in result) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(result.code).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const result = await produtoServices.create(req.body);
    if ('message' in result) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(result.code).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await produtoServices.remove(id);
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
