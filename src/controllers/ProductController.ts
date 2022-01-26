import { Request, response, Response } from "express";
import { ProductsService } from "../services/ProductsService";

class ProductController {
    async handle(request: Request, response: Response){

        const productsService = new ProductsService();

        const allProducts = await productsService.all();

        return response.json(allProducts);
    }
}

export { ProductController }