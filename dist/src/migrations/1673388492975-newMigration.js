"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMigration1673388492975 = void 0;
class newMigration1673388492975 {
    constructor() {
        this.name = 'newMigration1673388492975';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "jobs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "level" character varying NOT NULL, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "person_job" ("person_id" uuid NOT NULL, "job_id" uuid NOT NULL, CONSTRAINT "PK_a8ddd56d9bf4673ab9b8db3dfd9" PRIMARY KEY ("person_id", "job_id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_c7333bb9926768c2a7256b3944" ON "person_job" ("person_id") `);
            yield queryRunner.query(`CREATE INDEX "IDX_9f403e9a6ef2b6ece49c636cfc" ON "person_job" ("job_id") `);
            yield queryRunner.query(`ALTER TABLE "person_job" ADD CONSTRAINT "FK_c7333bb9926768c2a7256b39441" FOREIGN KEY ("person_id") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "person_job" ADD CONSTRAINT "FK_9f403e9a6ef2b6ece49c636cfc5" FOREIGN KEY ("job_id") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "person_job" DROP CONSTRAINT "FK_9f403e9a6ef2b6ece49c636cfc5"`);
            yield queryRunner.query(`ALTER TABLE "person_job" DROP CONSTRAINT "FK_c7333bb9926768c2a7256b39441"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_9f403e9a6ef2b6ece49c636cfc"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_c7333bb9926768c2a7256b3944"`);
            yield queryRunner.query(`DROP TABLE "person_job"`);
            yield queryRunner.query(`DROP TABLE "jobs"`);
            yield queryRunner.query(`DROP TABLE "persons"`);
        });
    }
}
exports.newMigration1673388492975 = newMigration1673388492975;
//# sourceMappingURL=1673388492975-newMigration.js.map