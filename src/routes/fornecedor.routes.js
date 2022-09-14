import { Router } from 'express';
import fornecedorController from '../controllers/fornecedor.controller';

const fornecedorRouter = Router();

fornecedorRouter.get('/', fornecedorController.getAll);
fornecedorRouter.get('/:id', fornecedorController.getOne);
fornecedorRouter.post('/', fornecedorController.create);
fornecedorRouter.put('/:id', fornecedorController.update);
fornecedorRouter.delete('/:id', fornecedorController.remove);

export default fornecedorRouter;
