import { MigrationInterface, QueryRunner } from "typeorm";

export class newMigration1673388492975 implements MigrationInterface {
    name = 'newMigration1673388492975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "level" character varying NOT NULL, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person_job" ("person_id" uuid NOT NULL, "job_id" uuid NOT NULL, CONSTRAINT "PK_a8ddd56d9bf4673ab9b8db3dfd9" PRIMARY KEY ("person_id", "job_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c7333bb9926768c2a7256b3944" ON "person_job" ("person_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9f403e9a6ef2b6ece49c636cfc" ON "person_job" ("job_id") `);
        await queryRunner.query(`ALTER TABLE "person_job" ADD CONSTRAINT "FK_c7333bb9926768c2a7256b39441" FOREIGN KEY ("person_id") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "person_job" ADD CONSTRAINT "FK_9f403e9a6ef2b6ece49c636cfc5" FOREIGN KEY ("job_id") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person_job" DROP CONSTRAINT "FK_9f403e9a6ef2b6ece49c636cfc5"`);
        await queryRunner.query(`ALTER TABLE "person_job" DROP CONSTRAINT "FK_c7333bb9926768c2a7256b39441"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f403e9a6ef2b6ece49c636cfc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c7333bb9926768c2a7256b3944"`);
        await queryRunner.query(`DROP TABLE "person_job"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "persons"`);
    }

}
