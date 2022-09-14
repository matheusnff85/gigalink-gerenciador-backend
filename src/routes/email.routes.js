import { Router } from 'express';
import emailController from '../controllers/email.controller';

const emailRouter = Router();

emailRouter.get('/', emailController.getAll);
emailRouter.get('/:id', emailController.getOne);
emailRouter.post('/', emailController.create);
emailRouter.put('/:id', emailController.update);
emailRouter.delete('/:id', emailController.remove);

export default emailRouter;
