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
exports.JobsServices = void 0;
const formatValuesBodyToLower_1 = require("./../utils/formatValuesBodyToLower");
const jobsRepo_1 = require("../repositories/jobsRepo");
require("express-async-errors");
exports.JobsServices = {
    getAllJobs(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield jobsRepo_1.jobsRepo.find({
                relations: {
                    persons: true,
                },
            });
        });
    },
    getJobById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            return yield jobsRepo_1.jobsRepo.find({
                where: {
                    id,
                },
                relations: {
                    persons: true,
                },
            });
        });
    },
    createJob(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, level } = req.body;
            const newJob = jobsRepo_1.jobsRepo.create({
                name: name === null || name === void 0 ? void 0 : name.toLowerCase(),
                level: level === null || level === void 0 ? void 0 : level.toLowerCase(),
            });
            yield jobsRepo_1.jobsRepo.save(newJob);
            return newJob;
        });
    },
    updateJob(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const body = yield req.body;
            const formatedBody = (0, formatValuesBodyToLower_1.formatValuesBodyToLower)(body);
            yield jobsRepo_1.jobsRepo.update(id, formatedBody);
            return yield jobsRepo_1.jobsRepo.findOneBy({ id });
        });
    },
    deleteJob(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield jobsRepo_1.jobsRepo.delete(req.params.id);
        });
    },
};
//# sourceMappingURL=jobsServices.js.map