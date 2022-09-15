const express = require('express');
const emailController = require('../controllers/email.controller');

const emailRouter = express.Router();

emailRouter.get('/', emailController.getAll);
emailRouter.get('/:id', emailController.getOne);
emailRouter.post('/', emailController.create);
emailRouter.put('/:id', emailController.update);
emailRouter.delete('/:id', emailController.remove);

module.exports = emailRouter;
