import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    category: string;
    @Column()
    fk_idCategorys: number
    @Column()
    name_product: string;
    @Column()
    price: number;
    @Column()
    image: string;
    @Column()
    id_categorys: number;
    @Column()
    name_categorys: string;
    @Column()
    selected: boolean;
}
