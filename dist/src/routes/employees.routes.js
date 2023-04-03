"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const verifyExistIdEmployeeByBody_1 = require("../middlewares/employeeJob/verifyExistIdEmployeeByBody");
const verifyExistIdJobByBody_1 = require("../middlewares/employeeJob/verifyExistIdJobByBody");
const verifyAlreadyExistEmail_1 = require("../middlewares/employee/verifyAlreadyExistEmail");
const verifyExistEmployeeById_1 = require("../middlewares/employee/verifyExistEmployeeById");
const employeeControllers_1 = require("./../controllers/employeeControllers");
const index_1 = require("../middlewares/validations/index");
const schemas_1 = require("../schemas");
const express_1 = require("express");
exports.employeeRoutes = (0, express_1.Router)();
exports.employeeRoutes.get("/", employeeControllers_1.EmployeeControllers.getAllPeople);
exports.employeeRoutes.post("/", (0, index_1.validateSchema)(schemas_1.employeeSchema), verifyAlreadyExistEmail_1.verifyAlreadyExistEmail, employeeControllers_1.EmployeeControllers.createUser);
exports.employeeRoutes.post("/jobs", (0, index_1.validateSchema)(schemas_1.employeeJobSchema), verifyExistIdJobByBody_1.verifyExistIdJobByBody, verifyExistIdEmployeeByBody_1.verifyExistIdEmployeeByBody, employeeControllers_1.EmployeeControllers.createPersonJob);
exports.employeeRoutes.get("/:id", verifyExistEmployeeById_1.verifyExistEmployeeById, employeeControllers_1.EmployeeControllers.getPersonById);
exports.employeeRoutes.patch("/:id", (0, index_1.validateSchema)(schemas_1.employeeSchema), verifyExistEmployeeById_1.verifyExistEmployeeById, verifyAlreadyExistEmail_1.verifyAlreadyExistEmail, employeeControllers_1.EmployeeControllers.updatePerson);
exports.employeeRoutes.delete("/:id", verifyExistEmployeeById_1.verifyExistEmployeeById, employeeControllers_1.EmployeeControllers.deletePerson);
//# sourceMappingURL=employees.routes.js.map