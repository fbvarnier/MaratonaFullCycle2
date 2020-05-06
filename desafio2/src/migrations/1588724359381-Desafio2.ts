import {MigrationInterface, QueryRunner} from "typeorm";

export class Desafio21588724359381 implements MigrationInterface {
    name = 'Desafio21588724359381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aulas" ("id" varchar PRIMARY KEY NOT NULL, "nome_aula" varchar NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "aulas"`, undefined);
    }

}
