import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1643129575299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "category",
                        type: "varchar",
                    },
                    {
                        name: "fk_idcategorys",
                        type: "int"
                    },
                    {
                        name: "name_product",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "int",
                    },
                    {
                        name: "image",
                        type: "varchar",
                    },
                    {
                        name: "id_categorys",
                        type: "int",
                    },
                    {
                        name: "name_categorys",
                        type: "varchar",
                    },
                    {
                        name: "selected",
                        type: "boolean",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
