const express = require('express');
const transportadoraController = require('../controllers/transportadora.controller');

const transportadoraRouter = express.Router();

transportadoraRouter.get('/', transportadoraController.getAll);
transportadoraRouter.get('/:id', transportadoraController.getOne);
transportadoraRouter.post('/', transportadoraController.create);
transportadoraRouter.put('/:id', transportadoraController.update);
transportadoraRouter.delete('/:id', transportadoraController.remove);

module.exports = transportadoraRouter;
