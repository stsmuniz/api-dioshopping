import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { ProductController } from "./controllers/ProductController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const productController = new ProductController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Teste'})
})

router.get('/message', listMessageController.handle)
router.post('/message', createMessageController.handle)

router.get('/products', productController.handle)

export { router }
