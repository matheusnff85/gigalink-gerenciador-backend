const express = require('express');
const telefoneController = require('../controllers/telefone.controller');

const telefoneRouter = express.Router();

telefoneRouter.get('/', telefoneController.getAll);
telefoneRouter.get('/:id', telefoneController.getOne);
telefoneRouter.post('/', telefoneController.create);
telefoneRouter.put('/:id', telefoneController.update);
telefoneRouter.delete('/:id', telefoneController.remove);

module.exports = telefoneRouter;
