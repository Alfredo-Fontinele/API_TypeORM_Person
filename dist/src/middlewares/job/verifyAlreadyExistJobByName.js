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
exports.verifyAlreadyExistJobByName = void 0;
const jobsRepo_1 = require("../../repositories/jobsRepo");
const appError_1 = require("../../errors/appError");
const verifyAlreadyExistJobByName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, level } = yield req.body;
    if (!name) {
        return next();
    }
    const existJob = yield jobsRepo_1.jobsRepo.findOneBy({
        name: name === null || name === void 0 ? void 0 : name.toLowerCase(),
        level: level === null || level === void 0 ? void 0 : level.toLowerCase(),
    });
    if (existJob) {
        throw new appError_1.AppError("Job`s name and level Already Exist", 400);
    }
    return next();
});
exports.verifyAlreadyExistJobByName = verifyAlreadyExistJobByName;
//# sourceMappingURL=verifyAlreadyExistJobByName.js.map