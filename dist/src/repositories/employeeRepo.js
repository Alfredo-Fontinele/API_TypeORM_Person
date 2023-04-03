"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRepo = void 0;
const data_source_1 = require("../data-source");
const Employee_1 = require("../entities/Employee");
exports.employeeRepo = data_source_1.AppDataSource.getRepository(Employee_1.Employee);
//# sourceMappingURL=employeeRepo.js.map