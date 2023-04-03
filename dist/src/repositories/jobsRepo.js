"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsRepo = void 0;
const data_source_1 = require("../data-source");
const Job_1 = require("../entities/Job");
exports.jobsRepo = data_source_1.AppDataSource.getRepository(Job_1.Job);
//# sourceMappingURL=jobsRepo.js.map