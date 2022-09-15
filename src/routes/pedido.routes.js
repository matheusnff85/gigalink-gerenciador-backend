const express = require('express');
const pedidoController = require('../controllers/pedido.controller');

const pedidoRouter = express.Router();

pedidoRouter.get('/', pedidoController.getAll);
pedidoRouter.get('/:id', pedidoController.getOne);
pedidoRouter.post('/', pedidoController.create);
pedidoRouter.put('/:id', pedidoController.update);
pedidoRouter.delete('/:id', pedidoController.remove);

module.exports = pedidoRouter;
