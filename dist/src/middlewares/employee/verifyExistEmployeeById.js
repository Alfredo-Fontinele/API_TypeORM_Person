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
exports.verifyExistEmployeeById = void 0;
const employeeRepo_1 = require("../../repositories/employeeRepo");
const appError_1 = require("../../errors/appError");
const verifyExistEmployeeById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const existEmployee = yield employeeRepo_1.employeeRepo.findOneBy({ id });
    if (!existEmployee) {
        throw new appError_1.AppError("Person Not Found", 404);
    }
    req.employeeFound = existEmployee;
    return next();
});
exports.verifyExistEmployeeById = verifyExistEmployeeById;
//# sourceMappingURL=verifyExistEmployeeById.js.map