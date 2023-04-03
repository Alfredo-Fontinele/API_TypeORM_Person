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
exports.EmployeesServices = void 0;
const employeeRepo_1 = require("../repositories/employeeRepo");
const jobsRepo_1 = require("../repositories/jobsRepo");
const appError_1 = require("../errors/appError");
const bcryptjs_1 = require("bcryptjs");
require("express-async-errors");
exports.EmployeesServices = {
    getAllEmployees(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield employeeRepo_1.employeeRepo.find({
                relations: {
                    jobs: true,
                },
            });
        });
    },
    getEmployeeById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            return yield employeeRepo_1.employeeRepo.find({
                where: {
                    id,
                },
                relations: {
                    jobs: true,
                },
            });
        });
    },
    createEmployee(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = yield req.body;
            const passCrypt = yield (0, bcryptjs_1.hash)(password, 8);
            const newEmployee = employeeRepo_1.employeeRepo.create({
                name,
                email,
                password: passCrypt,
            });
            const newUser = yield employeeRepo_1.employeeRepo.save(newEmployee);
            let employeeCreatedWithoutPassword = {};
            const newUserValues = Object.entries(newUser);
            newUserValues.forEach((user) => {
                const key = user[0];
                if (key !== "password") {
                    const value = user[1];
                    employeeCreatedWithoutPassword[key] = value;
                }
            });
            return employeeCreatedWithoutPassword;
        });
    },
    updateEmployee(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, password } = yield req.body;
            const passCrypt = yield (0, bcryptjs_1.hash)(password, 8);
            yield employeeRepo_1.employeeRepo.update(id, {
                name,
                email,
                password: passCrypt,
            });
            return yield employeeRepo_1.employeeRepo.find({
                where: {
                    id,
                },
                relations: {
                    jobs: true,
                },
            });
        });
    },
    deleteEmployee(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield employeeRepo_1.employeeRepo.delete(req.employeeFound.id);
        });
    },
    createEmployeeJob(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_job, id_employee } = req.body;
            const employee = yield employeeRepo_1.employeeRepo.findOneBy({ id: id_employee });
            if (!employee) {
                throw new appError_1.AppError("Employee not Exists", 404);
            }
            const job = yield jobsRepo_1.jobsRepo.findOneBy({ id: id_job });
            if (!job) {
                throw new appError_1.AppError("Job not Exists", 404);
            }
            const infoJob = Object.assign({}, job);
            const newJob = Object.assign(Object.assign({}, employee), { jobs: [infoJob] });
            yield employeeRepo_1.employeeRepo.save(newJob);
            return newJob;
        });
    },
};
//# sourceMappingURL=employeesServices.js.map