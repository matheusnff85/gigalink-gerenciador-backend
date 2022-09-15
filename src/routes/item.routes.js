const express = require('express');
const itemController = require('../controllers/item.controller');

const itemRouter = express.Router();

itemRouter.get('/', itemController.getAll);
itemRouter.get('/:id', itemController.getOne);
itemRouter.post('/', itemController.create);
itemRouter.put('/:id', itemController.update);
itemRouter.delete('/:id', itemController.remove);

module.exports = itemRouter;
