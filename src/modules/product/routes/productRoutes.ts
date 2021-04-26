import printProduct  from '../action/printProduct';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (req, res) => printProduct(req, res));

export default productsRouter;