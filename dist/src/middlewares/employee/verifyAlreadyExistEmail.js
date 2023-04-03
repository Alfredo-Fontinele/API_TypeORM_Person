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
exports.verifyAlreadyExistEmail = void 0;
const employeeRepo_1 = require("../../repositories/employeeRepo");
const appError_1 = require("../../errors/appError");
const verifyAlreadyExistEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const existEmail = yield employeeRepo_1.employeeRepo.findOneBy({ email });
    if (existEmail) {
        throw new appError_1.AppError("Email Already Exist", 403);
    }
    return next();
});
exports.verifyAlreadyExistEmail = verifyAlreadyExistEmail;
//# sourceMappingURL=verifyAlreadyExistEmail.js.map