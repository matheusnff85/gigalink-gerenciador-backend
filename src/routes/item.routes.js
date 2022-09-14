import { Router } from 'express';
import itemController from '../controllers/item.controller';

const itemRouter = Router();

itemRouter.get('/', itemController.getAll);
itemRouter.get('/:id', itemController.getOne);
itemRouter.post('/', itemController.create);
itemRouter.put('/:id', itemController.update);
itemRouter.delete('/:id', itemController.remove);

export default itemRouter;
