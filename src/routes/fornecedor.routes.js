const express = require('express');
const fornecedorController = require('../controllers/fornecedor.controller');

const fornecedorRouter = express.Router();

fornecedorRouter.get('/', fornecedorController.getAll);
fornecedorRouter.get('/:id', fornecedorController.getOne);
fornecedorRouter.post('/', fornecedorController.create);
fornecedorRouter.put('/:id', fornecedorController.update);
fornecedorRouter.delete('/:id', fornecedorController.remove);

module.exports = fornecedorRouter;
