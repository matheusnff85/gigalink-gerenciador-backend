import { Router } from 'express';
import produtoController from '../controllers/produto.controller';

const produtoRouter = Router();

produtoRouter.get('/', produtoController.getAll);
produtoRouter.get('/:id', produtoController.getOne);
produtoRouter.post('/', produtoController.create);
produtoRouter.put('/:id', produtoController.update);
produtoRouter.delete('/:id', produtoController.remove);

export default produtoRouter;
