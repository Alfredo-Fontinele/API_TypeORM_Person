"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const persons_routes_1 = require("./persons.routes");
const jobs_routes_1 = require("./jobs.routes");
const express_1 = require("express");
exports.Routes = (0, express_1.Router)();
exports.Routes.use('/persons', persons_routes_1.personRoutes);
exports.Routes.use('/jobs', jobs_routes_1.jobRoutes);
//# sourceMappingURL=index.js.map