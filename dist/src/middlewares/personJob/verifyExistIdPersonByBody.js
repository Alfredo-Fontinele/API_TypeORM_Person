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
exports.verifyExistIdPersonByBody = void 0;
const personRepo_1 = require("../../repositories/personRepo");
const appError_1 = require("../../errors/appError");
const verifyExistIdPersonByBody = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield req.body;
    const existPerson = yield personRepo_1.personRepo.findOneBy({ id: body.id_person });
    if (!existPerson) {
        throw new appError_1.AppError('Person not found', 404);
    }
    return next();
});
exports.verifyExistIdPersonByBody = verifyExistIdPersonByBody;
//# sourceMappingURL=verifyExistIdPersonByBody.js.map