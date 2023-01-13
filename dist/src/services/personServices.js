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
exports.PersonServices = void 0;
const personRepo_1 = require("../repositories/personRepo");
const jobsRepo_1 = require("./../repositories/jobsRepo");
const appError_1 = require("./../errors/appError");
const bcryptjs_1 = require("bcryptjs");
require("express-async-errors");
exports.PersonServices = {
    getAllPeople: (req) => __awaiter(void 0, void 0, void 0, function* () {
        return yield personRepo_1.personRepo.find({
            relations: {
                jobs: true
            }
        });
    }),
    getPersonById: (req) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        return yield personRepo_1.personRepo.find({
            where: {
                id: id
            },
            relations: {
                jobs: true
            }
        });
    }),
    createPerson: (req) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, password } = yield req.body;
        const passCrypt = yield (0, bcryptjs_1.hash)(password, 8);
        const newPerson = personRepo_1.personRepo.create({
            name, email, password: passCrypt
        });
        yield personRepo_1.personRepo.save(newPerson);
        return newPerson;
    }),
    updatePerson: (req) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, email, password } = yield req.body;
        const passCrypt = yield (0, bcryptjs_1.hash)(password, 8);
        yield personRepo_1.personRepo.update(id, {
            name, email, password: passCrypt
        });
        return yield personRepo_1.personRepo.find({
            where: {
                id
            },
            relations: {
                jobs: true
            }
        });
    }),
    deletePerson: (req) => __awaiter(void 0, void 0, void 0, function* () {
        return yield personRepo_1.personRepo.delete(req.personFound.id);
    }),
    createPersonJob: (req) => __awaiter(void 0, void 0, void 0, function* () {
        const { id_job, id_person } = req.body;
        const person = yield personRepo_1.personRepo.findOneBy({ id: id_person });
        if (!person) {
            throw new appError_1.AppError('Person not Exists', 404);
        }
        const job = yield jobsRepo_1.jobsRepo.findOneBy({ id: id_job });
        if (!job) {
            throw new appError_1.AppError('Job not Exists', 404);
        }
        const infoJob = {
            id: job.id,
            level: job.level,
            name: job.name,
        };
        const newJob = Object.assign(Object.assign({}, person), { jobs: [infoJob] });
        yield personRepo_1.personRepo.save(newJob);
        return newJob;
    })
};
//# sourceMappingURL=personServices.js.map