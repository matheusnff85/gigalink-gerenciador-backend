import { Router } from 'express';
import telefoneController from '../controllers/telefone.controller';

const telefoneRouter = Router();

telefoneRouter.get('/', telefoneController.getAll);
telefoneRouter.get('/:id', telefoneController.getOne);
telefoneRouter.post('/', telefoneController.create);
telefoneRouter.put('/:id', telefoneController.update);
telefoneRouter.delete('/:id', telefoneController.remove);

export default telefoneRouter;
