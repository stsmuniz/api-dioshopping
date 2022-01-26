import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repository/ProductsRepository";


export class ProductsService {
    async all(){
        const messageRepository = getCustomRepository(ProductsRepository);

        const allMessages = await messageRepository.find();

        return allMessages
    }
}