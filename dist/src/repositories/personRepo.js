"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personRepo = void 0;
const data_source_1 = require("../data-source");
const Person_1 = require("../entities/Person");
exports.personRepo = data_source_1.AppDataSource.getRepository(Person_1.Person);
//# sourceMappingURL=personRepo.js.map