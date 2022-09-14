import { Router } from 'express';
import pedidoController from '../controllers/pedido.controller';

const pedidoRouter = Router();

pedidoRouter.get('/', pedidoController.getAll);
pedidoRouter.get('/:id', pedidoController.getOne);
pedidoRouter.post('/', pedidoController.create);
pedidoRouter.put('/:id', pedidoController.update);
pedidoRouter.delete('/:id', pedidoController.remove);

export default pedidoRouter;
