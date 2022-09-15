const express = require('express');
const produtoController = require('../controllers/produto.controller');

const produtoRouter = express.Router();

produtoRouter.get('/', produtoController.getAll);
produtoRouter.get('/:id', produtoController.getOne);
produtoRouter.post('/', produtoController.create);
produtoRouter.put('/:id', produtoController.update);
produtoRouter.delete('/:id', produtoController.remove);

module.exports = produtoRouter;
