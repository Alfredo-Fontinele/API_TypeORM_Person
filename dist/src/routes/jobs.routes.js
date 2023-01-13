"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRoutes = void 0;
const verifyAlreadyExistJobByName_1 = require("./../middlewares/job/verifyAlreadyExistJobByName");
const verifyExistJobById_1 = require("./../middlewares/job/verifyExistJobById");
const index_1 = require("./../middlewares/validations/index");
const verifyBodyJob_1 = require("../middlewares/job/verifyBodyJob");
const jobControllers_1 = require("./../controllers/jobControllers");
const schemas_1 = require("../schemas");
const express_1 = require("express");
exports.jobRoutes = (0, express_1.Router)();
exports.jobRoutes.get('/', jobControllers_1.JobControllers.getAllJobs);
exports.jobRoutes.post('/', (0, index_1.validateSchema)(schemas_1.jobSchema), verifyAlreadyExistJobByName_1.verifyAlreadyExistJobByName, jobControllers_1.JobControllers.createJob);
exports.jobRoutes.get('/:id', verifyExistJobById_1.verifyExistJobById, jobControllers_1.JobControllers.getJobById);
exports.jobRoutes.patch('/:id', verifyBodyJob_1.verifyBodyJob, verifyExistJobById_1.verifyExistJobById, verifyAlreadyExistJobByName_1.verifyAlreadyExistJobByName, jobControllers_1.JobControllers.updateJob);
exports.jobRoutes.delete('/:id', verifyExistJobById_1.verifyExistJobById, jobControllers_1.JobControllers.deleteJob);
//# sourceMappingURL=jobs.routes.js.map