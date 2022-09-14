import { Router } from 'express';
import transportadoraController from '../controllers/transportadora.controller';

const transportadoraRouter = Router();

transportadoraRouter.get('/', transportadoraController.getAll);
transportadoraRouter.get('/:id', transportadoraController.getOne);
transportadoraRouter.post('/', transportadoraController.create);
transportadoraRouter.put('/:id', transportadoraController.update);
transportadoraRouter.delete('/:id', transportadoraController.remove);

export default transportadoraRouter;
