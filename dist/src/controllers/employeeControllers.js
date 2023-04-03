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
exports.EmployeeControllers = void 0;
const employeesServices_1 = require("../services/employeesServices");
exports.EmployeeControllers = {
    getAllPeople(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield employeesServices_1.EmployeesServices.getAllEmployees(req);
            return res.status(200).json(data);
        });
    },
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield employeesServices_1.EmployeesServices.createEmployee(req);
            return res.status(201).json(data);
        });
    },
    getPersonById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield employeesServices_1.EmployeesServices.getEmployeeById(req);
            return res.status(200).json(data);
        });
    },
    updatePerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield employeesServices_1.EmployeesServices.updateEmployee(req);
            return res.status(200).json(data);
        });
    },
    deletePerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield employeesServices_1.EmployeesServices.deleteEmployee(req);
            return res.status(204).json(data);
        });
    },
    createPersonJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield employeesServices_1.EmployeesServices.createEmployeeJob(req);
            return res.status(201).json(data);
        });
    },
};
//# sourceMappingURL=employeeControllers.js.map