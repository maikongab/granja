import {MigrationInterface, QueryRunner, Table, useContainer} from "typeorm";

export class CreateUsers1625733494362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user",
                    type: "varchar"
                },
                {
                    name: "email",
                    type:"varchar"
                },
                {
                    name:"admin",
                    type:"boolean",
                    default: false
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"updated_at",
                    type:"timestemp",
                    default:"now()"
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
