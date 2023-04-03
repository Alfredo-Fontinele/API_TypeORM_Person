"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const employees_routes_1 = require("./employees.routes");
const jobs_routes_1 = require("./jobs.routes");
const express_1 = require("express");
exports.Routes = (0, express_1.Router)();
exports.Routes.use("/employees", employees_routes_1.employeeRoutes);
exports.Routes.use("/jobs", jobs_routes_1.jobRoutes);
//# sourceMappingURL=index.js.map